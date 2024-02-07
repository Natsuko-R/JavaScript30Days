type ReduceFn = (accum: number, curr: number) => number

function reduce(arr: number[], fn: ReduceFn, n: number): number {
    let result: number = n;

    for (let v of arr) {
        // result = fn(v, result);
        result = fn(result, v);
    }

    return result;
}

// const fn1 = (accum: number, curr: number) => accum + curr;
// const fn2 = (accum: number, curr: number) => accum + curr * curr;
// const fn3 = (accum: number, curr: number) => 0;

// console.log(reduce([1, 2, 3, 4], fn1, 5)); // 15
// console.log(reduce([1, 2, 3, 4], fn2, 100)); // 130
// console.log(reduce([], fn3, 42)); // 42
