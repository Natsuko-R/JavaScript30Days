type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function ChunkArray(arr: any[], size: number): any[][] {

    const chunkedArray: any[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        // resultArr.push(arr.slice(i, size));
        chunkedArray.push(arr.slice(i, i + size));
    };

    return chunkedArray;
}

// EXAMPLE 1
// const arr = [1, 2, 3, 4, 5];
// const size = 1;

// EXAMPLE 2
// const arr = [1, 9, 6, 3, 2];
// const size = 3;

// EXAMPLE 3
// const arr = [8, 5, 3, 2, 6];
// const size = 6;

// EXAMPLE 4
// const arr: number[] = [];
// const size = 1;

// const result = ChunkArray(arr, size);

// console.log(result);
