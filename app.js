// import { printName } from "./printName.js";
// import { multiply } from "./multiply.js";
// import { writeFile, readFile, appendFile, unlink } from "fs/promises";
// // const printName = require("./printName");
// // const multiply = require("./multiply");
// printName();
// multiply(2, 3);
// async function run() {
//   await writeFile("notes.txt", "My first note");
//   console.log("Saved!");

//   const content = await readFile("notes.txt", "utf-8");
//   console.log("Read back: ", content);
// }
// run();
// try {
//   await appendFile("notes.txt", "\nAnother note");
//   console.log("Appended!");
// } catch (err) {
//   console.error("Failed to append:", err);
// }

////////////////////////////////////////////

import { createServer } from "http";
const port = 1337;
const server = createServer((req, res) => {
  if (req.url === "/home" || req.url === "/") {
    res.end("Welcome!");
  } else if (req.url === "/about") {
    res.end("This is the about page.");
  } else if (req.url === "/contact") {
    res.end("This is the contact page.");
  }
});
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
