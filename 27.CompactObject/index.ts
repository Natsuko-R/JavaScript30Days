type Obj = Record<string, any> | Array<any>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        // If it's an array, filter out falsy values and recursively compact each element
        return obj
            .filter((value) => Boolean(value))
            .map((value) => compactObject(value));
    } else if (typeof obj === 'object' && obj !== null) {
        // If it's an object, filter out falsy values and recursively compact each property
        const compactedObj: Record<string, any> = {};
        for (const key in obj) {
            if (Boolean(obj[key])) {
                compactedObj[key] = compactObject(obj[key]);
            }
        }
        return compactedObj;
    }
    // For non-object, non-array values, just return the value
    return obj;
}

// Example usage:
const example1 = [null, 0, false, 1];
const example2 = { "a": null, "b": [false, 1] };
const example3 = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(example1)); // Output: [1]
console.log(compactObject(example2)); // Output: {"b": [1]}
console.log(compactObject(example3)); // Output: [5, [], [16]]
