type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
    let called = false;
    let result: JSONValue | undefined;

    return function (...args) {
        if (!called) {
            called = true;
            return result = fn(...args);
        }
        return undefined;
    };
}

// Test cases
let fn = (a: number, b: number, c: number) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // Output: 6
console.log(onceFn(2, 3, 6)); // Output: undefined
