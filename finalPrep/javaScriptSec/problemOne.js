function largestTwo (arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= largest) {
            secondLargest = largest;
            largest= arr[i];
        }
        else if(arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return [largest, secondLargest]
}

/*function largestTwo (arr) {
    let result = [];
    let startIdx = 0;
    console.log(startIdx);
    while(startIdx < arr.length - 1 && result.length <= 1) {
        let largestIdx = startIdx;
        for (let i = startIdx + 1; i < arr.length; i++) {
            if (arr[i] > arr[largestIdx]) {
                largestIdx = i;
            }
        }
        result.push(arr[largestIdx]);
        [arr[startIdx], arr[largestIdx]] = [arr[largestIdx], arr[startIdx]];
        console.log(arr);
        startIdx++;
        console.log(startIdx);
    }
    return result;
}*/

const testArr = [7, -2, 33, 4, 5, 1, 23, 23];

const result = largestTwo(testArr);
console.log(result);