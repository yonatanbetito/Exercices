//1

function createCounter(){
  let count = 5;
  return function(){
    count++;
    return count;
  }  
}
const counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())

//2

function secretHolder(TheSecret) {
    let secret = TheSecret
    let obj = {
        getSecret: () => secret,
        setSecret: (_secret) => {
            secret = _secret;
        }
    }
      return obj;  
    }
const {setSecret,getSecret} = secretHolder("123")
    setSecret("333")
    console.log(getSecret())

//3

function buildFunctions() {
const arr = [];
for (let i = 0; i < 3; i++) {
arr.push(function () {
console.log(i);
});
}
return arr;
}

const funcs = buildFunctions();
funcs[0](); // should print 0
funcs[1](); // should print 1
funcs[2](); // should print 2