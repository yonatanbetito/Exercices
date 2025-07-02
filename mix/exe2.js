/*
let age = 6;
let height = 100;
let sonOfManager = false;

if (sonOfManager) {
  console.log("the kid can go on whatever he");
} else if (age < 15) {
  console.log("Cannot enter");
} else if (age > 15 && height < 110) {
  console.log("Go on kids ride");
} else if (age > 15 && height > 110) {
  console.log("Go on rollercoaster");
}

//2
let number = 1
while (number<=10){
    //console.log(number)
    number++
}
//3
for (let i = 0; i < 50;i++){
    if(i%3==0)
        console.log(i)
}

//1
let num = 58423;
let sum = 0
while(num>0){
    sum += num%10
    num = Math.floor(num/10)
}
console.log(sum)
//2

let num = 4;
let shepe = "";
for (let i = 1;i<=num;i++){
    shepe+="*"
    console.log(shepe)
}
//3

let numbers = 34125;
let bigNumber = ""
strNumbers = numbers.toString()
for (let i = 0 ; i<strNumbers.length;i++){
    if (strNumbers[i]>bigNumber)
        bigNumber=strNumbers[i]
}
console.log(bigNumber)
//4

let number = 10045
let count = 0
while(number>0){
    count++
    number=Math.floor(number/10)
}
console.log(count)
//5

let SNumber = 5
let ENumber = 16
for(let i = SNumber;i<=ENumber;i++){
    if (i%2==0){
        console.log(i)
    }
}
//6

let numbers = 1234
let reverse =""
let str = numbers.toString()
for (let i = str.length-1;i>=0;i--){
    reverse+=str[i]
}
console.log(reverse)
//7

let size = 8
for (let i = 1; i <= size; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += i;
  }
  console.log(line);
}
//8

let Number = 123211
let RNumber =""
let str = Number.toString()
for (let i = str.length-1;i>=0;i--){
    RNumber+=str[i]
}
if(RNumber == Number){
    console.log("is palindrome")
}
else{
    console.log("not a palindrome")
}
//9

let numberMulti = 4
for(let i = 1;i<=10;i++){
    console.log(numberMulti*i)
}
//10

let number =10
while (number !== 1 && number>0){
    if (number%2==0){
        number=Math.floor(number/2)
        console.log(number)
    }
    else{
        number = number*3+1
        console.log(number)
    }
} 
*/