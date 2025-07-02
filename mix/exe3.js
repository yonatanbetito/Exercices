/*
let a = "avi"
let b = "cohen"
console.log(a,b)
a = a+b
b = a.slice(0,a.length - b.length)
a = a.slice(b.length)
console.log(a,b)
//2
const grid = [
  ['x', 'O', 'X', 'x', 'X'],
  ['X', 'x', 'O', 'O', 'x'],
  ['x', 'X', 'x', 'X', 'O'],
  ['O', 'O', 'X', 'x', 'x'],
  ['X', 'O', 'x', 'X', 'X']
];
let count = 0;
for (let i =0;i<=grid.length-1;i++){
    for(let j = 0; j<=grid[i].length-1;j++){
        if (grid[i][j]==='X'){
            count +=1
        }
    }
}
console.log(count)
//3
let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
console.log(family.children[2].name);
//4
let original = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}
console.log(original);
console.log(reversed);
//5
const mixArr = [1, "hello", null, 42, { a: 1 }, true, false, "world", null, [1, 2, 3], undefined];
const types = {
  num: 0,
  str: 0,
  obj: 0,
  bool: 0,
  null: 0
};
for (let item of mixArr) {
  if (item === null) {
    types.null++;
  } else if (typeof item === "number") {
    types.num++;
  } else if (typeof item === "string") {
    types.str++;
  } else if (typeof item === "boolean") {
    types.bool++;
  } else if (typeof item === "object") {
    types.obj++;
  }
}
console.log(types)
//6
const arrNumbers = [12,121,32,1,234,445,]
let bigerr = []
let operation = 0
for (let i = 0;i<=arrNumbers.length-1;i++){
    if(arrNumbers[i]>=100){
        bigerr.push(arrNumbers[i])
        operation++
    }
}
console.log(operation,bigerr)
//7

let numbers = {
    even:[],
    odd:[]
}
let cont =0

for(let i = 1; i<=50;i++){
    if(i%2===0&&i%3===0){
        cont++
    }
    if(i%2===0)
        numbers.even.push(i);
  else
        numbers.odd.push(i);
}
console.log(cont,numbers.even,numbers.odd)

//8
let grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j || i + j === 2) {
      grid[i][j] = "#";
    }
  }
}
console.log(grid[0])
console.log(grid[1])
console.log(grid[2])

//9
let dic = {};
let str = "kfmmbttgg"
for (let i = 0; i < str.length; i++){
    if (dic[str[i]]){
        dic[str[i]]++;
    }
    else{
        dic[str[i]] = 1;
    }
}
console.log(dic)
*/
//10
let matrix=[
  [80, 90, -85], 
  [-70, 60, 75],    
  [95, 88, -92]
  ]
let lstNumbers= []
for (let i = 0 ; i<=matrix.length-1;i++){
    for ( let j = 0; j<=matrix[i].length;j++){
        if (matrix[i][j]>=0){
            lstNumbers.push(matrix[i][j])
        }
    }
}
console.log(lstNumbers)