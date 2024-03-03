function bonusScoring(input) {

    let numberOfStudents = Number(input.shift());
    let totalLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let finalScore = [];
    for (const attendance of input) {
        if (numberOfStudents > 0 && totalLectures > 0 && additionalBonus > 0) {
            let totalBonus = attendance / totalLectures * (5 + additionalBonus);
            finalScore.push(totalBonus);
        }
    }
    let sortedScore = finalScore.sort((a, b) => b - a);

    console.log(`Max Bonus: ${Math.ceil(sortedScore.slice(0, 1).join(' '))}.`);
    
    if (numberOfStudents > 0 && totalLectures > 0 && additionalBonus > 0) {
        let sortedAttendance = input.sort((a, b) => b - a);
        console.log(`The student has attended ${sortedAttendance.slice(0, 1).join(' ')} lectures.`);
    }else {
        console.log(`The student has attended 0 lectures.`);
    }
}
bonusScoring([
    '0', '0', '0', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]

);