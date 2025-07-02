import { randomInt } from "crypto";
import fs from "fs";

function delayedGreet(name, delay) {
  return new Promise((res, rejects) => {
    if (typeof delay !== "number") {
      rejects("Delay must be a number");
    }
    setTimeout(() => {
      res(`Hello ${name}`);
    }, delay);
  });
}
delayedGreet("yoni", 2000)
  .then((res) => {
    console.log(res);
  })
  .catch((rejects) => {
    console.log(rejects);
  });

//exe2
function readFileContent(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        rej(err);
        return;
      }
      res(data);
    });
  });
}

readFileContent("./Db.txt")
  .then((res) => {
    console.log(`Content of file.txt: ${res}`);
  })
  .catch((rej) => {
    console.log(rej);
  });

//3

function randomOperation() {
  return new Promise((resolve, rejects) => {
    const num = randomInt(0, 2);
    const chencs = ["Success!", "Failure!"];
    resolve(chencs[num]);
  });
}

randomOperation()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

  //4