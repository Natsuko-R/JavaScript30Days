type ToBeOrNotToBe = {
    toBe: (n: any) => boolean;
    notToBe: (n: any) => boolean;
}

function expect(value: number): ToBeOrNotToBe {

    return {
        toBe: function (expected: number) {
            if (value === expected) {
                return true
            }
            throw new Error("Not Equal")
        },
        notToBe: function (expected: number) {
            if (value !== expected) {
                return true
            }
            throw new Error("Equal")
        },
    }
}

// console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(null));
