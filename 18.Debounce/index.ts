type F = (...args: number[]) => void
type Inputs = any[]
interface Call { t: number, inputs: Inputs }

function debounce(fn: F, t: number): F {

    // let timer: NodeJS.Timeout | null;
    let timer: any;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};

const fn = (...inputs: Inputs) => {
    console.log([Date.now(), inputs])
};

// EXAMPLE 1
// const calls: Call[] = [
//     { "t": 50, inputs: [1] },
//     { "t": 75, inputs: [2] }
// ];
// const debounceFn = debounce(fn, 50);


// EXAMPLE 2
// const calls: Call[] = [
//     { t: 50, inputs: [1] },
//     { t: 100, inputs: [2] },
// ];
// const debounceFn = debounce(fn, 20);


// EXAMPLE 3
// const calls: Call[] = [
//     { t: 50, inputs: [1, 2] },
//     { t: 300, inputs: [3, 4] },
//     { t: 300, inputs: [5, 6] },
// ];
// const debounceFn = debounce(fn, 150);
// // Explanation:
// // The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
// // The 2nd call is cancelled by the 3rd call
// // The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).


// calls.forEach(call => setTimeout(() => {
//     debounceFn(...call.inputs)
// }, call.t));

