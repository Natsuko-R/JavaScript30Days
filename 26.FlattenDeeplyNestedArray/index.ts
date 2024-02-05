type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr: MultiDimensionalArray, num: number): MultiDimensionalArray {

    const result: MultiDimensionalArray = [];

    for (const ele of arr) {
        if (Array.isArray(ele) && num > 0) {
            result.push(...flat(ele, num - 1));
        } else {
            result.push(ele);
        }
    }

    return result;
}

// Test examples
// const example1 = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0);
// console.log(example1); // Output should be [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// const example2 = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
// console.log(example2); // Output should be [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// const example3 = flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);
// console.log(example3); // Output should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
