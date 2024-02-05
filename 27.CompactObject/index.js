// /**
//  * @param {Object|Array} obj
//  * @return {Object|Array}
//  */

// function compactObject(obj) {
//   if (Array.isArray(obj)) {
//     return obj.filter(v => Boolean(v)).map(compactObject); // .map((value) => compactObject(value));
//   } else if (typeof obj === "object" && obj !== null) {
//     const compactedObj = {};
//     for (const key in obj) {
//       if (Boolean(obj[key])) {
//         compactedObj[key] = compactObject(obj[key]);
//       }
//     }
//     return compactedObj;
//   }
//   return obj;
// }

// // Example usage:
// const example1 = [null, 0, false, 1];
// const example2 = { "a": null, "b": [false, 1] };
// const example3 = [null, 0, 5, [0], [false, 16]];

// console.log(compactObject(example1)); // Output: [1]
// console.log(compactObject(example2)); // Output: {"b": [1]}
// console.log(compactObject(example3)); // Output: [5, [], [16]]