function outer() {
    let outerVar = "I'm from outer";

    function inner() {
        console.log(outerVar); // ✅ Accessible!
    }

    inner();
}
outer(); // "I'm from outer"



function createCounter() {
    let count = 0;  // This variable is "closed over"

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1 ← count persists!
console.log(counter()); // 2 ← still remembers count
console.log(counter()); // 3



function multiplyBy(factor) {
    return function (number) {
        return number * factor;  // Closures over 'factor'
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15