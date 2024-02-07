type MemoFn = (...args: number[]) => number
type CacheType = { [key: string]: number }

function memoize(fn: MemoFn): MemoFn {
    const cache: CacheType = {};

    return function (...args) {
        const key = args.join(",");
        if (key in cache) {
            return cache[key]; // get value
        } else {
            return cache[key] = fn(...args); // set value
        }
    }
}

// Test cases
// const sum = (a: number, b: number, c: number) => a + b + c;
// const memoizedSum = memoize(sum);
// console.log(memoizedSum(2, 2)); // Output: NaN
// c 会被视为undefined。因此，函数会尝试计算a + b + undefined，结果将是NaN（Not a Number）。


// const sum = (a: number, b: number) => a + b;
// const memoizedSum = memoize(sum);
// console.log(memoizedSum(2, 2)); // Output: 4
// console.log(memoizedSum(2, 2)); // Output: 4
// console.log(memoizedSum(1, 2)); // Output: 3
// console.log(memoizedSum(1, 2)); // Output: 3

// 阶乘
// n! = n × (n - 1) × (n - 2) × ... × 2 × 1
// 0 的阶乘定义为 1， 0! = 1。
// const factorial = (n: number): number => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoizedFactorial = memoize(factorial);
// console.log(memoizedFactorial(2)); // Output: 2
// console.log(memoizedFactorial(3)); // Output: 6
// console.log(memoizedFactorial(2)); // Output: 2
// console.log(memoizedFactorial(3)); // Output: 6

// 计算数学序列 斐波那契数列 的函数 fibonacci 
// 每个数字都是前两个数字之和，起始于0和1。数列的前几个数字如下所示：0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// 这个函数的定义是典型的递归定义。
// 在递归过程中，fib(n) 的计算依赖于 fib(n-1) 和 fib(n-2) 的值
const fib = (n: number): number => (n <= 1) ? 1 : (fib(n - 1) + fib(n - 2)); // 而不是  (n <= 1) ? n 错
const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 8