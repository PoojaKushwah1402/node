/** @format */

const path = require("path");
const fs = require("fs");
console.log("__dirname", __dirname);

//-------Creating directory
(function () {
  //directory create - asynchronously
  console.log("before fs.mkdir");
  fs.mkdir(path.join(__dirname, "/newDir"), (err) => {
    if (err) {
      console.log("error", err);
    }
    console.log("directory created -----");
  });
  console.log("aftre fs.mkdir");
  //directory create - synchronously
  console.log("before fs.mkdirSync");
  fs.mkdirSync(path.join(__dirname, "/newDirasync"));
  console.log("aftre fs.mkdirSync");
})();

// // read file
(function () {
  //reading file - asynchronously
  console.log("before async");
  fs.readFile(path.join(__dirname, "some.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log("after  async");
  //reading file - synchronously
  console.log("before sync");
  const fileContents = fs.readFileSync(
    path.join(__dirname, "some.txt"),
    "utf-8"
  );
  console.log("fileContents", fileContents);
  console.log("after sync");
})();

//file created and write
//writefile also has sync version like fs.writeFileSync
fs.writeFile(
  path.join(__dirname, "/create", "text.txt"),
  "hello how are you !",
  (err) => {
    if (err) throw err;

    console.log("file created nad written successfully");
  }
);

///append file
//we can append in writefile as well with an 'a' flag
fs.appendFile(
  path.join(__dirname, "create", "text.txt"),
  "hello im fine thank u its create!",
  (err) => {
    if (err) throw err;

    console.log("file created nad written successfully");
  }
);

////Rename file.
fs.rename(
  path.join(__dirname, "create", "text.txt"),
  path.join(__dirname, "create", "text_1.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed");
  }
);

//delete file
fs.unlink(path.join(__dirname, "new.txt"), (err) => {
  if (err) console.log(err);
  else console.log("file deleted");
});
