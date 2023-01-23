function printStudents(input) {
    let students = {};

    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(x => Number(x));

        // if (students[name]) {
        //     students[name] = students[name].concat(grades)
        // } else {
        //     students[name] = grades;
        // }
        if (!students[name]) {
            students[name] = [];
        }

        students[name] = students[name].concat(grades);
    }

    let studentsEntries = Object.entries(students);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

printStudents(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
