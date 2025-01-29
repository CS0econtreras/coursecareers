function managerRank (employees){
    let hiearchy = {};
    for (let employee of employees) {
        if(!hiearchy[employee.id]){
            hiearchy[employee.id] = [];
        }
        if (employee.manager) {
           if(!hiearchy[employee.manager]){
             hiearchy[employee.manager] = [employee.id]; 
           }
           else {
            hiearchy[employee.manager].push(employee.id);
           }  
       }
    }
    

    function getReports(manager) {
        let report = [];
        let queue = [...hiearchy[manager]];
        while(queue.length > 0){
            current = queue.shift();
            report.push(current);
            queue.push(...hiearchy[current]);
        }
        return report;
    }
    let finalHiearchy = {};
    for (let manager in hiearchy) {
        if (hiearchy[manager].length > 0) {
            finalHiearchy[manager] = getReports(manager);
        }
    }
    return finalHiearchy;

}

const sampleArr =
[
    {"id": "1", "manager": "2"},
    {"id": "2", "manager": "3"},
    {"id": "3"},
    {"id": "4", "manager": "2"},
    {"id": "5", "manager": "4"}
];

const result = managerRank(sampleArr);
console.log(result);