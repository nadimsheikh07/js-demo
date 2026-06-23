function linear_search(numbers, target) {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] == target) {
            return index;
        }
    }
    return -1
}

let nums = [40, 10, 3, 2, 4]
let target_val = 10

let result = linear_search(nums, target_val)
console.log(result) 
