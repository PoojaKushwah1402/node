/** @format */
const path = require("path");

console.log(__filename, "--filename");
console.log(__dirname, "--directoryname");

console.log(path.basename(__filename), "--basename filename");
console.log(path.basename(__dirname), "--basename directoryname");

console.log(path.extname(__filename), "--extname filename");
console.log(path.extname(__dirname), "--extname directoryname");

console.log(path.parse(__filename), "--parse filename");
console.log(path.parse(__dirname), "--parse directoryname");

console.log(path.format(path.parse(__filename)), "--format filename");
console.log(path.format(path.parse(__dirname)), "--format directoryname");

console.log(path.isAbsolute(__filename), "--isAbsolute filename");
console.log(path.isAbsolute(__dirname), "--isAbsolute directoryname");

console.log(path.join("f1", "f2", "index.html"), "--path join");
console.log(path.join("/f1", "f2", "index.html"), "--path join");
console.log(path.join("f1", "/f2", "index.html"), "--path join");
console.log(path.join("/f1", "f2", "../index.html"), "--path join");
console.log(path.join(__dirname, "../index.html"), "--path join");

console.log(path.resolve("f1", "f2", "index.html"), "--path resolve");
console.log(path.resolve("/f1", "f2", "index.html"), "--path resolve");
console.log(path.resolve("f1", "/f2", "index.html"), "--path resolve");
console.log(path.resolve("/f1", "f2", "../index.html"), "--path resolve");
console.log(path.resolve(__dirname, "../index.html"), "--path resolve");
