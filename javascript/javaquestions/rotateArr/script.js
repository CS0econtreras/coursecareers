function reverse (arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArray (arr, k){
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1,);
    reverse(arr, k, arr.length - 1);
    return arr;
}

const resut = rotateArray([1, 2, 3, 4, 5], 2);
console.log(resut)