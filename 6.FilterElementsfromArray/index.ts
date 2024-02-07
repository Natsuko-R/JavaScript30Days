type FilterFn<T> = (v: number, n: number) => T

function filter<T>(arr: number[], fn: FilterFn<T>): number[] {

    let resArr: number[] = [];

    for (let v of arr) {
        if (fn(v, arr.indexOf(v))) resArr.push(v)
    };

    return resArr;
}


// Test cases
// const arr1 = [0, 10, 20, 30];
// const fn1 = (n: number) => n > 10;
// console.log(filter(arr1, fn1)); // Output: [20, 30]

// const arr2 = [1, 2, 3];
// const fn2 = (_: unknown, i: number) => i === 0;
// console.log(filter(arr2, fn2)); // Output: [1]

// const arr3 = [-2, -1, 0, 1, 2];
// const fn3 = (n: number) => n + 1;
// console.log(filter(arr3, fn3)); // Output: [-2, 0, 1, 2]