type FnType2 = (...args: any) => void

function cancellable2(fn: FnType2, args: any[], t: number): () => void {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);
    return () => clearInterval(timer);
}

// const cancelTimeMs = 140;
// const cancelFn = cancellable2((x: number) => console.log(x * 2), [4], 50);
// setTimeout(cancelFn, cancelTimeMs);

// const cancelTimeMs = 165;
// const cancelFn = cancellable2((x: number, y: number) => console.log(x * y), [2, 5], 30);
// setTimeout(cancelFn, cancelTimeMs);

const cancelTimeMs = 180;
const cancelFn = cancellable2((x: number, y: number, z: number) => console.log(x + y + z), [9, 2, 5], 70);
setTimeout(cancelFn, cancelTimeMs); 
