type SortFn<T> = (value: T) => number

function sortBy<T>(arr: T[], fn: SortFn<T>): T[] {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// const arr = [5, 4, 1, 2, 3];
// const fn = (x: number) => x;

// const arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }];
// const fn = (d: { "x": number }) => d.x;

// const arr = [[3, 4], [5, 2], [10, 1]];
// const fn = (x: number[]) => x[1];
// console.log(sortBy(arr, fn));
