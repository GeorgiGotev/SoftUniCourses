function bonusScoring(input) {
    let ppl=input.shift();
    let totalLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let highBonus=0;
    let attendanceOfHighStudent=0;
    for (const attendance of input) {
        let totalBonus = attendance / totalLectures * (5 + additionalBonus);
        if(highBonus<totalBonus){
            highBonus=totalBonus;
            attendanceOfHighStudent=attendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(highBonus)}.`);
    console.log(`The student has attended ${attendanceOfHighStudent} lectures.`);

}
bonusScoring([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);