function findLargestAgeDifference (agePairs){
    if(agePairs.length === 0) return 0;
    let largestAgeDifference = 0;

    for (let i = 0; i < agePairs.length; i++) {
        let ageDifference = agePairs[i][1] - agePairs[i][0];
        if(ageDifference > largestAgeDifference) {
            largestAgeDifference = ageDifference;
        }
    }
    return largestAgeDifference;
}
const result = findLargestAgeDifference([[18, 30], [29, 40], [50,60]]);
console.log(result);

//this is bad because i am doing the calculation twice instead of storing it then comparing
/*function findLargestAgeDifference (agePairs) {
    if(agePairs.length === 0) return 0;
    let largestAgeDifference = null;
    for (let i = 0; i < agePairs.length; i++) {
        if (agePairs[i][1] - agePairs[i][0] > largestAgeDifference) {
            largestAgeDifference = agePairs[i] [1] - agePairs[i] [0];
        }
    }
    return largestAgeDifference
}
*/
