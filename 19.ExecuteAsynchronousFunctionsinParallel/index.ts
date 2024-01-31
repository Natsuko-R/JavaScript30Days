type FunctionWithPromise = () => Promise<any>

interface Result {
    t: number;
    resolved?: any[];
    rejected?: any
}

function promiseAll(fns: FunctionWithPromise[]): Promise<Result> {
    const startTime = Date.now();
    return new Promise((resolve, reject) => {

        let result: any[] = [];
        let count = 0;
        fns.forEach((fn, i) => {

            fn()
                .then(res => {
                    // console.log(i, res);
                    // 0 4
                    // 2 16
                    // 1 10
                    result[i] = res;
                    count++;
                    // console.log(i, result);
                    // 0[4]
                    // 2[4, < 1 empty item >, 16 ]
                    // 1[4, 10, 16]
                    if (count === fns.length) {
                        resolve({ t: Date.now() - startTime, resolved: result })
                    }
                })
                .catch((err) => {
                    reject({ t: Date.now() - startTime, rejected: err })
                })
        })
    })
};

// EXAMPLE 1
// const fns: FunctionWithPromise[] = [
// () => new Promise((res) => { setTimeout(() => res(5), 200) }),
// ]

// EXAMPLE 2
// const fns: FunctionWithPromise[] = [
// () => new Promise((res) => { setTimeout(() => res(1), 200) }),
// () => new Promise((_, reject) => { setTimeout(() => reject(&quot;ERROR&quot;), 100) }),
// ]

// EXAMPLE 3
// const fns: FunctionWithPromise[] = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]

// promiseAll(fns).then(console.log) // for short : .then(result => console.log(result))