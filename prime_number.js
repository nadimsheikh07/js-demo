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

function getPrimesUpTo(max) {
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


console.log(getPrimesUpTo(20)); 
