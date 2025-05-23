function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}

// Example
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

const result1 = curriedSum(1)
const result2 = result1(2)
const result3 = result2(3)
const result4 = result2(4)

console.log(result3); // [Function]
console.log(result4); // [Function]