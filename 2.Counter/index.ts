// closure 

function Counter(n: number) {
    return function (): number {
        console.log(n);

        return n++;
    }
}
const fn = Counter(10)
console.log(fn());
console.log(fn());
console.log(fn());



