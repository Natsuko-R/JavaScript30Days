class Calculator {
    private result: number;

    constructor(num: number) {
        this.result = num;
    }

    // 返回 this，即当前对象的引用。允许链式调用，即可以在一个表达式中连续调用多个方法。
    add(num: number) {
        this.result += num;
        return this;
    }

    subtract(num: number) {
        this.result -= num;
        return this;
    }

    multiply(num: number) {
        this.result *= num;
        return this;
    }

    divide(num: number) {
        if (num === 0) {
            throw new Error("Division by zero is not allowed")
        }
        this.result /= num;
        return this;
    }

    power(num: number) {
        this.result **= num;
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example 1
// const calculator = new Calculator(10);
// const result = calculator.add(5).subtract(7).getResult();
// console.log(result); // Output: 8

// Example 2
// const calculator = new Calculator(2);
// const result = calculator.multiply(5).power(2).getResult();
// console.log(result); // Output: 100

// Example 3
try {
    const calculator = new Calculator(20);
    const result3 = calculator.divide(0).getResult();
    console.log(result3); // This line won't be reached
} catch (error: any) {
    console.error(error.message); // Output: Division by zero is not allowed
}
