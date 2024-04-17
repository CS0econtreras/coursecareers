function mathIsFun(numberString){
    const stringArray = numberString.split("|")
    let largestArrayNum = Number(stringArray[0])
    let secondLargestArrayNum = undefined;
    let largestSum = 0
    for(i = 0; i < stringArray.length - 1; i++){
        if(largestArrayNum <= stringArray[i + 1]){
            secondLargestArrayNum = largestArrayNum;
            largestArrayNum = Number(stringArray[i + 1])
        }else if(secondLargestArrayNum < stringArray[i + 1]){
            secondLargestArrayNum = Number(stringArray[i + 1])
        }
    largestSum = largestArrayNum +secondLargestArrayNum
    }
    
    return largestSum
}

const result = mathIsFun("-12|-4|-1");
console.log(result)