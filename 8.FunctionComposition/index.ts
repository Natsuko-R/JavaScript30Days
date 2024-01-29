type FunctionType = (x: number) => number;

const composeFunctions = (fnArr: FunctionType[], x: number): number => {

    if (fnArr.length === 0) return x;

    // Use reduceRight to apply functions from right to left
    return fnArr.reduceRight((x, fn) => fn(x), x);
}


// EXAMPLE 1
// const  functions: FunctionType[] = [x => x + 1, x => x * x, x => 2 * x], x = 4;

// EXAMPLE 2
// const  functions: FunctionType[] = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1;

// EXAMPLE 3
// const  functions: FunctionType[] = [], x = 42

// const result = composeFunctions(functions,x);
// console.log(result);






// TS : interface rather than type

// interface FunctionType {
//     (x: number): number;
//   }
  
//   interface ComposeFunctions {
//     (functions: FunctionType[], x: number): number;
//   }
  
//   const composeFunctions: ComposeFunctions = function (functions, x) {
//     if (functions.length === 0) {
//       return x; // Identity function
//     }
  
//     return functions.reduceRight((result, fn) => fn(result), x);
//   };