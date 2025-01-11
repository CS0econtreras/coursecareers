function updateEmloyeeSalary (employees, employeeId, employeeSalary) {
    for (const employee of employees) {
        if (employee.id === employeeId) {
            employee.salary = employeeSalary;
            return employee;
        }
    }
    return null;
}


const employees = [{id: 1, name: "John Doe", position: "Software Engineer", salary: 70000, 
    department: {name: "Engineering", location: "New York"}}, { id: 2, name: "Jane Smith", position: "Product Manager", salary:
        80000, department: { name: "Product", location: "San Francisco"}}
]

const result = updateEmloyeeSalary(employees, 3, 10000)
console.log(result);
console.log(employees[0].department.name);