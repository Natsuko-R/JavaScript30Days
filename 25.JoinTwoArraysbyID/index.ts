// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type ArrayType = { "id": number } & Record<string, JSONValue>;

// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {

//     const idSet = new Set<string>();
//     const resultMap: { [id: number]: ArrayType } = {};

//     // arr1
//     for (const obj of arr1) {
//         const { id, ...rest } = obj;
//         idSet.add(id);
//         resultMap[id] = { ...rest } as ArrayType;
//     }

//     // arr2 : merging with arr1 if id already exists
//     for (const obj of arr2) { // [of] rather than [in] !!
//         const { id, ...rest } = obj;
//         idSet.add(id);

//         if (resultMap[id]) {
//             resultMap[id] = { ...resultMap[id], ...rest };
//         } else {
//             resultMap[id] = { ...rest } as ArrayType;
//         }
//     }

//     const joinedArray = Array.from(idSet).map((n) => ({ "id": n, ...resultMap[n] }));
//     joinedArray.sort((a, b) => a.id - b.id);

//     return joinedArray;

// };


// // ----------------- EXAMPLE  ----------------- //

// const arr1 = [
//     { "id": 1, "x": 2, "y": 3 },
//     { "id": 2, "x": 3, "y": 6 }
// ];

// const arr2 = [
//     { "id": 2, "x": 10, "y": 20 },
//     { "id": 3, "x": 0, "y": 0 }
// ];

// const result = join(arr1, arr2);
// console.log(result);











// // ----------------- MEMO 1  ----------------- //

// // const obj = { id: 1, x: 2, y: 3, z: 4 };
// // const { id, ...rest } = obj;
// // console.log(id);    // Output: 1
// // console.log(rest);  // Output: { x: 2, y: 3, z: 4 }


// // ----------------- MEMO 2  ----------------- //

// // const a = new Set([1, 2, 3]);
// // const b = new Map([
// //     [1, "one"],
// //     [2, "two"],
// //     [4, "four"],
// // ]);
// // console.log(a.union(b)); // Set(4) {1, 2, 3, 4}