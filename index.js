// 1. Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// 2. Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 3. Function to find the maximum number in an array
function findMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// 4. Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 5. Function to filter odd numbers from an array
function filterOddNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

// 6. Function to sum all elements in an array
function sumArray(array) {
    return array.reduce((sum, number) => sum + number, 0);
}

// 7. Function to sort an array in ascending order
function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}

// 8. Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(calculateSum(5, 3)); // Output: 8
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(reverseString("hello")); // Output: "olleh"
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
