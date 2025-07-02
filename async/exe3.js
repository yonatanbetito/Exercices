setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            console.log(0);
            console.log("Time`s up!");
          });
          console.log(1);
        }, 1000);
        console.log(2);
      }, 2000);
      console.log(3);
    }, 3000);
    console.log(4);
  }, 4000);
  console.log(5);
}, 5000);

//option 2

function countdown(n) {
  if (n < 0) {
    console.log("Time's up!");
    return;
  }

  console.log(n);
  setTimeout(() => {
    countdown(n - 1);
  }, 1000);
}

//countdown(5)
