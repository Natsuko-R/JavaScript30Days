type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count: number = init;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init,
    };
}

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.reset());     // 5
// console.log(counter.decrement()); // 4

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
console.log(counter.reset());     // 0