function widgets (plants) {
    let outPut = {};

    for (let plant of plants) {
        outPut[plant.id] = {};
        totalTime = 0;
        
        for (let step of plant.productionSteps) {
            totalTime += step.time;
            outPut[plant.id][step.step] = totalTime;    
        }
    }
    return outPut;
}

const sampleArr = [{
        "id" : "Plant1",
        "productionSteps" : [
            {"step": "Step1", "time": 5},
            {"step": "Step2", "time": 7},
            {"step": "Step3", "time": 2}
        ]
    },
    {
        "id" : "Plant2",
        "productionSteps" : [
            {"step": "StepA", "time": 3},
            {"step": "StepB", "time": 4},
            {"step": "StepC", "time": 8}
        ]
    }
]

const testObj = {};

testObj[sampleArr[0].id] = {};
testObj[sampleArr[0].id][sampleArr[0].productionSteps[0].step] = 5;
console.log(testObj);
//const result = widgets(sampleArr);
//console.log(result);