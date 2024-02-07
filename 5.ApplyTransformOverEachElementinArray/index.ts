type MapFn = (v: number, n: number) => number;

function map(arr: number[], fn: MapFn): number[] {

    let mappedArr: number[] = [];

    for (const v of arr) {
        mappedArr.push(fn(v, arr.indexOf(v)))
    }

    return mappedArr;
};

// console.log(map([1, 2, 3], v => v + 1));
console.log(map([1, 2, 3], (v, n) => v + n));
// console.log(map([10, 20, 30], () => 42));
