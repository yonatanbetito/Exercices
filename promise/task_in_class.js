import fs from "fs";
import Readline from "readline-sync";

function creatUser() {
  fs.readFile("./Db.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    const newUser = Readline.question("enter userName: ");
    while (dataJson.includes(newUser)) {
      newUser = Readline.question("user exists, enter userName: ");
    }
    dataJson.push(newUser);
    console.log(dataJson);
    const dataStr = JSON.stringify(dataJson);
    console.log(dataStr);
    fs.writeFile("./Db.txt", dataStr, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

function updateUser() {
  fs.readFile("./Db.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dataJson = JSON.parse(data);
    console.log(dataJson);
    let newUser = Readline.question("enter userName: ").trim();
    for (let i = 0; i < dataJson.length; i++) {
      if (dataJson[i] === newUser) {
        newUser = Readline.question("enter userName: ").trim();
        dataJson[i] = newUser;
      }
    }
    console.log(dataJson);
    const dataStr = JSON.stringify(dataJson);
    console.log(dataStr);
    fs.writeFile("./Db.txt", dataStr, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

//del
function deleteUser() {
  fs.readFile("./Db.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let dataJson = JSON.parse(data);
    console.log(dataJson);
    let newUser = Readline.question("enter userName: ");
    if (dataJson.includes(newUser)) {
      dataJson = dataJson.filter((user) => user !== newUser);
    } else {
      console.log(`user not fund ${newUser}`);
    }
    console.log(dataJson);
    const dataStr = JSON.stringify(dataJson);
    console.log(dataStr);
    fs.writeFile("./Db.txt", dataStr, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}
