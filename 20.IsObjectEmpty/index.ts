

function isEmpty(obj: any): boolean {

    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if ((typeof obj === "object" && obj !== null)) {
        return Object.keys(obj).length === 0;
    }
    return false;

}

// EXAMPLE 1
// const obj = [3];

// EXAMPLE 2
// const obj = { "x": 5, "y": 42 };

// EXAMPLE 3
// const obj = {};

// EXAMPLE 4
// const obj = [null, false, 0];

// const result = isEmpty(obj);

// console.log(result);
