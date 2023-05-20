class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary <= 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        let newEmployee = { name, salary: Number(salary), position };
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(newEmployee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let departments = Object.entries(this.departments);
        let avgSalary = 0;
        let bestAvg = 0;
        let bestDepartment = '';
        departments.forEach(element => {
            let sum = 0
            let length = element[1].length;
            element[1].forEach(person => {
                sum += person.salary;
            });
            avgSalary = sum / length;
            if (bestAvg < avgSalary) {
                bestAvg = avgSalary;
                bestDepartment = element[0];
            }
        });
        if (bestDepartment !== '') {
            let result = `Best Department is: ${bestDepartment}\n`
            result += `Average salary: ${bestAvg.toFixed(2)}\n`
            Object.values(this.departments[bestDepartment])
                .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                .forEach(x => {
                    result += `${x.name} ${x.salary} ${x.position}\n`
                });
            return (result.trim());
        }
    }
}





let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());