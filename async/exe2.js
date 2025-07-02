import fs from "fs";

function listFilesOnly() {
  fs.readdir("./", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const fils = data.filter((item) => item.includes("."));
    console.log(fils);
  });
}
listFilesOnly();
