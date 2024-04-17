function mathIsFun(numberString) {
    // step 1 is to strip out all the numbers
    // we can use the built in .split() function for this

    const numbers = numberString.split("|")
    let maxSum = undefined; // we can't start this variable at 0 because the max sum could be negative

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) { // we start j at i + 1 so we don't repeat previous calculations
            const number1 = numbers[i]
            const number2 = numbers[j]
            // we need to convert them to Number type because they are strings
            const sum = Number(number1) + Number(number2)
            if (maxSum === undefined || sum > maxSum) {
                maxSum = sum
            }
        }
    }

    return maxSum
}

const result = mathIsFun("-2|-4|-1|-1")
console.log(result)