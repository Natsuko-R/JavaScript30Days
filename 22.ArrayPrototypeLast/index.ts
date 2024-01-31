
// SOLUTION 2

type ArrayWithLast<T> = Array<T> & { last(): T | -1 };

function createArrayWithLast<T>(arr: T[]): ArrayWithLast<T> {
    const fn: ArrayWithLast<T> = Object.assign(arr, {
        last: function (this: ArrayWithLast<T>) {
            return this.length ? this[this.length - 1] : -1;
            // return this.length === 0 ? -1 : this.slice(-1)[0];
            // return this.length ? this.at(-1) : -1;
            // return this.length ? this.pop() : -1; // .pop() would throw TS error , why ?
            // return this[this.length - 1] ?? -1;
        },
    });
    return fn;
}

// // Example usage:
const nums1 = createArrayWithLast([null, {}, 3]);
console.log(nums1.last()); // Output: 3

const nums2 = createArrayWithLast([]);
console.log(nums2.last()); // Output: -1








// Object.assign :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true



