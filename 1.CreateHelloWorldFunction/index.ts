function createHelloWorld() {
    return function (...args: any): string {
        return "Hello Natuki !";
    }
}

const f = createHelloWorld();
console.log(f());
console.log(f([{}, null, 42]));