/** @format */

const path = require("path");
const fs = require("fs/promises");
console.log("__dirname", __dirname);

console.log("first");

//Promise version of FS filesystem
fs.readFile(path.join(__dirname, "some.txt"), "utf8")
  .then((data) => {
    console.log("data after reading file--", data);
  })
  .catch((err) => {
    console.log("error reading file--", err);
  });

console.log("second");

//async-await version
const readFile = async function () {
  console.log("async-await = 1");
  try {
    const fileContent = await fs.readFile(
      path.join(__dirname, "some.txt"),
      "utf8"
    );
    console.log("fileContent--", fileContent);
  } catch (err) {
    console.log("error occured in readiing file async-await");
  }
  console.log("async-await = 2");
};
readFile();
