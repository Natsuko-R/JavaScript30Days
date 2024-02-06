type NestedArray = number[] | number[][];

interface IArrayWrapper {
    valueOf(): number;
    toString(): string;
}

class ArrayWrapper implements IArrayWrapper {
    private val: number;
    private str: string;

    constructor(nums: NestedArray) {
        const flattenedArr = this.flattenArray(nums);
        this.val = flattenedArr.reduce((a, c) => a + c, 0);
        this.str = `[${nums.toString()}]`;
    }

    valueOf(): number {
        return this.val;
    }

    toString(): string {
        return this.str;
    }

    private flattenArray(nums: NestedArray): number[] {
        if (!Array.isArray(nums[0])) {
            return nums as number[];
        }
        return (nums as number[][]).reduce((arr, child) => arr.concat(this.flattenArray(child)), [])
    }
}

// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// const sum1 = obj1.valueOf() + obj2.valueOf();
// console.log(sum1); // 10

const obj3 = new ArrayWrapper([[23, 98, 42, 70], [23, 98, 42, 70]]);
const sum2 = obj3.toString();
console.log(sum2); // "[23,98,42,70,23,98,42,70]"

const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
const sum = obj1.valueOf() + obj2.valueOf();
console.log(sum); // 0


