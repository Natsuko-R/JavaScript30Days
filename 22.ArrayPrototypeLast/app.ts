
// SOLUTION 1

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

export { };

Array.prototype.last = function <T>(): T | -1 {
    return this.length ? this[this.length - 1] : -1;
}

// Example usage:
const nums1: any[] = [null, {}, 3];
console.log(nums1.last()); // Output: 3

const nums2: any[] = [];
console.log(nums2.last()); // Output: -1



