// Find the first largest and second largest numbers in an array using:
// - A single for loop
// - Only 2 variables (first, second)
// - No sorting
// - No built-in methods (no Math.max, no sort, no filter)
 
// Input: [3, 1, 4, 1, 5, 9, 2, 6]
// Expected: First Largest = 9, Second Largest = 6



const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

let first = 0;
let second = 0;

for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    if (current > first) {
        second = first; // Demote old largest to second
        first = current; // Update new largest
    } else if (current > second && current !== first) {
        second = current; // Update second largest (handles duplicates)
    }
}

console.log(`First Largest = ${first}, Second Largest = ${second}`);
// Output: First Largest = 9, Second Largest = 6
