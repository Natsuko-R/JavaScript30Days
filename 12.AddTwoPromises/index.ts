type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const [res1, res2] = await Promise.all([promise1, promise2]);
    return res1 + res2;
}

// const promise1: P = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 20);
// })
// const promise2: P = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(5), 60);
// })
// addTwoPromises(promise1, promise2).then(console.log);

const promise3: P = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4: P = new Promise(resolve => setTimeout(() => resolve(-12), 30));
addTwoPromises(promise3, promise4).then(console.log);