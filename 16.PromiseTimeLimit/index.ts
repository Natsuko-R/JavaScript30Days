type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {

    return async function (...args) {

        const startTime = Date.now();

        const executionPromise = fn(...args);

        const timeoutPromise = new Promise<any>((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
        });

        try {
            const result = await Promise.race([executionPromise, timeoutPromise]);
            const elapsedTime = Math.floor(Date.now() - startTime);
            return { "resolved": result, "time": elapsedTime };
        } catch (err) {
            const elapsedTime = Math.floor(Date.now() - startTime);
            return { "rejected": err, "time": elapsedTime };
        }
    }
};


// EXAMPLE 1
// const fn = async (n: any) => {
//     await new Promise(res => setTimeout(res, 100));
//     return n * n;
// };
// const inputs = [5];
// timeLimit(fn, 50)(...inputs).then(res => console.log(res));


// EXAMPLE 2
// const fn = async (n: any) => {
//     await new Promise(res => setTimeout(res, 100));
//     return n * n;
// };
// const inputs = [5];
// timeLimit(fn, 150)(...inputs).then(res => console.log(res));


// EXAMPLE 3
// const fn = async () => {
//     throw "Error";
// };
// const inputs: number[] = [];
// timeLimit(fn, 1000)(...inputs).then(res => console.log(res));