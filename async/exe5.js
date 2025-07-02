import os from "os";

function firsttry(num) {
  if (num === 0) return;
  setTimeout(() => {
    const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
    console.log(`Free Memory: ${((freeMemGB * 100) / totalMemGB).toFixed(2)}`);
    firsttry(num - 1);
  }, 2000);
}
firsttry(5);
