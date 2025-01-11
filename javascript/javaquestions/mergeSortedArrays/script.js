function mergeSortedArray (arr1, arr2) {
    let newArr = [];
    let firstIdx = 0;
    let secondIdx = 0;

    while(firstIdx < arr1.length && secondIdx < arr2.length) {
        if (arr1[firstIdx] < arr2[secondIdx]){
            newArr.push(arr1[firstIdx]);
            firstIdx++;
        }
        else {
            newArr.push(arr2[secondIdx]);
            secondIdx++
        }
    }

    while (firstIdx < arr1.length) {
        newArr.push(arr1[firstIdx]);
        firstIdx++;
    }

    while (secondIdx < arr2.length){
        newArr.push(arr2[secondIdx]);
        secondIdx++;
    }
    return newArr;
}

const result = mergeSortedArray([1, 3, 5], [3, 4, 6]);
console.log(result);