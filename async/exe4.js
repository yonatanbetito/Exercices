import fs from "fs";
import rn from "random";
fs.readFile("./quotes.txt", "utf-8", (err, data) => {
  const arrLine = data.split("\n");

  for (let i = 0; i < arrLine.length; i++) {
    let line = "";
    while (line === "") {
      const randIndex = rn.int(0, arrLine.length - 1);
      line = arrLine[randIndex];
    }
    console.log(line);
  }
});
