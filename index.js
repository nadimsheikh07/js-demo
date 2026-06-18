function parent() {
    let count = 0

    return function child() {
        count++;
        return count;
    }
}

const fun = parent()
console.log(fun())
console.log(fun())