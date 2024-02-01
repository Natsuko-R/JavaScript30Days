type InputType<T> = (item: T) => string
type ReturnType<T> = { [key: string]: T[] }

declare global {
    interface Array<T> {
        groupBy(fn: InputType<T>): ReturnType<T>
    }
}
export { };

Array.prototype.groupBy = function <T>(fn: InputType<T>): ReturnType<T> {

    const groupBy: ReturnType<T> = {};

    this.forEach((item: T) => {
        const key = fn(item);
        // if (groupBy[key]) {
        //     groupBy[key].push(item);
        // } else {
        //     groupBy[key] = [item];
        // }
        groupBy[key] = groupBy[key] ?? [];
        groupBy[key].push(item);
    })
    return groupBy;
}


// Example 1
const array1 = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
];
const fn1 = function (item: { "id": string }) {
    return item.id;
};
console.log(array1.groupBy(fn1));


// Example 2
const array2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];
const fn2 = function (list: number[]) {
    return String(list[0]);
};
console.log(array2.groupBy(fn2));


// Example 3
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fn3 = function (n: number) {
    return String(n > 5);
};
console.log(array3.groupBy(fn3));