function isPrime(n) {
    if (n <= 1) {
        return false
    }

    if (n === 2) {
        return true
    }

    if (n % 2 == 0) {
        return false
    }

    let limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) {
            return false; // Found a factor, not prime
        }
    }

    return true
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(1));  // Output: fal

