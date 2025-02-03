function managerHiearchy(str, operations, ranges) {
    let newText = [];
    if(ranges[0][0] > 0) {
        newText.push(str.substring(0, ranges[0][0]));
    }

    for(let i = 0; i < ranges.length; i++) {
        let range = ranges[i]
        let chunk = str.substring(range[0], range[1] + 1);

        for(let operation of operations){
            chunk = operation(chunk);
        }
        newText.push(chunk);
        let nextRangeStart =  (i < ranges.length - 1) ? ranges[i + 1][0] : str.length;
        console.log(nextRangeStart);
        let nextNextMiddle = str.substring(range[1] + 1, nextRangeStart);
        newText.push(nextNextMiddle);
    }

    return newText.join('');
}


let text = "Hello, World!";
let operations = [
function(text) { return text.toUpperCase(); },
function(text) { return text.replace(/o/g, "0"); },
];
let ranges = [[0, 4], [7, 12]];
console.log(managerHiearchy(text, operations, ranges));