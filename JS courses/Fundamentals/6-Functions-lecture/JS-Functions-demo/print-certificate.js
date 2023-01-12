function printCertificate(grade, names) {
    // Get Full Name
    let fullName = getFullName(names);

    // Get formatted grade
    let formattedGrade = formatGrade(grade);

    // Print result
    if (pass(grade)) {
        printHeader();
        console.log(fullName);
        console.log(formattedGrade);
    } else {
        // TODO: ...
    }
}

function getFullName(names) {
    return `${names[0]} ${names[1]}`;
}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function formatGrade(grade) {
    let gradeAnotation = '';

    if (grade < 3) {
        gradeAnotation = 'Fail';
    } else if (grade < 3.5) {
        gradeAnotation = 'Poor';
    } else if (grade < 4.5) {
        gradeAnotation = 'Good';
    } else if (grade < 5.5) {
        gradeAnotation = 'Very good';
    } else {
        gradeAnotation = 'Excellent';
    }

    if (gradeAnotation == 'Fail') {
        return `${gradeAnotation} (2)`;
    } else {
        return `${gradeAnotation} (${grade.toFixed(2)})`;
    }
}

function pass(grade) {
    return grade >= 3;
}

printCertificate(5.25, ['Peter', 'Carter']);
