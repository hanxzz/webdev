// const fs = require("fs");
// fs.writeFile("message.txt", "Hello Node.js", "utf8", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../message.txt", "utf8");

const second = writeFileSync("../message2.txt", "HOLY FUCK ", { flag: "a" });
console.log(first);
console.log(second);
