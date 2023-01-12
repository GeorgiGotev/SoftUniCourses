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
        console.log(`${gradeAnotation} (2)`);
    } else {
        console.log(`${gradeAnotation} (${grade.toFixed(2)})`);
    }
}

formatGrade(2.99);



