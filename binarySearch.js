function binary_search(numbers, target) {
    low = 0
    high = numbers.length - 1

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (numbers[mid] == target) {
            return mid;
        } else if (numbers[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1;
}

let numbers = [2, 3, 4, 10, 40]
let target_value = 10

let result = binary_search(numbers, target_value)

console.log(result)