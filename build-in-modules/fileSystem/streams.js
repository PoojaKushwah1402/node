/** @format */

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const gzip = zlib.createGzip();

//buffer streams uses is 64Kbytes
//we can change default value with option highWaterMark
const readableStream = fs.createReadStream(path.join(__dirname, "s1.txt"), {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableStream
  .pipe(gzip)
  .pipe(fs.WriteStream("./build-in-modules/fileSystem/write.txt.gz"));

const writableStream = fs.createWriteStream(path.join(__dirname, "s2.txt"));

//with streams
// readableStream.on("data", (chunks) => {
//   console.log("chunks---", chunks);
//   writableStream.write(chunks);
// });

//with pipes
readableStream.pipe(writableStream);
