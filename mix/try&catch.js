//1

function extractNumbers(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("not array");
    }
    return arr.filter((items) => typeof items === "number");
  } catch (err) {
    console.log(err);
  }
}
//console.log(extractNumbers([1,"tgt","5",null,6,3]));
// console.log(extractNumbers(1));
//2

function sumNumbersSafe(arr) {
  try {
    const listNumber = extractNumbers(arr);
    let sum = listNumber.reduce(function (total, current) {
      return total + current;
    });
    return sum;
  } catch (err) {
    console.error(err.message);
    return 0;
  }
}
//console.log(sumNumbersSafe([1,"tgt","5",null,6,3]))
//console.log(sumNumbersSafe(["null"]))
//3
function filterLargeSums(arrList, minTotal) {
  const results = [];

  for (let i = 0; i < arrList.length; i++) {
    try {
      const item = arrList[i];

      if (!Array.isArray(item)) {
        throw new Error("Not arr");
      }

      const sum = sumNumbersSafe(item);

      if (sum >= minTotal) {
        results.push(sum);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return results;
}
//console.log(filterLargeSums([[1,2,3], [10,"bad",5], "fail"], 10));

//4
function summaryStats(arrList) {
  const results = [];

  for (let i = 0; i < arrList.length; i++) {
    try {
      const item = arrList[i];

      if (!Array.isArray(item)) {
        throw new Error("Not an array");
      }

      const sum = sumNumbersSafe(item);
      if (sum < 10) continue;

      const nums = extractNumbers(item);
      const average = nums.length > 0 ? sum / nums.length : 0;

      results.push({ sum: sum, average: average });
    } catch (err) {
      console.error(err.message);
    }
  }

  return results;
}
//למדתי שאפשר להדפיס גם בצורה של טבלה
console.table(summaryStats([[1, 2, 3], [5, 5, 5], [100], "bad"]));
//5

function safeCalculator(a, b, operation) {
  if (typeof a !== typeof b) {
    throw new Error("inputs is not the same type");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("inputs is not a numbers");
  }

  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("cannot divide by 0");
      }
      return a / b;
    default:
      console.log("Unknown operation");
  }
}
console.log(safeCalculator(3, 5, "multiply"));
console.log(safeCalculator(3, 5, "hgh"));
console.log(safeCalculator(60, 6, "divide"));
console.log(safeCalculator(3, 0, "divide"));
