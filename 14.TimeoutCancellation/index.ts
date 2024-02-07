type FnType = (...args: any) => void

function cancellable(fn: FnType, args: any[], t: number): () => void {
    // declare timerId and call setTimeout
    const timerId = setTimeout(() => {
        fn(...args)
    }, t)

    return () => {
        clearTimeout(timerId);
    }
};

// const cancelTimeMs = 50;
// const cancelFn = cancellable((x: number) => console.log(x * 5), [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// const cancelTimeMs = 50;
// const cancelFn = cancellable((x: number) => console.log(x ** 2), [2], 60);
// setTimeout(cancelFn, cancelTimeMs);

// const cancelTimeMs = 50;
// const cancelFn = cancellable((x: number, y: number) => console.log(x * y), [2, 4], 30);
// setTimeout(cancelFn, cancelTimeMs);

