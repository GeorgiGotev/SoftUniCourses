function solve(worker) {
    let obj = { ...worker };

    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * obj.experience / 10;
        obj.dizziness = false;
    }
    return obj;

}
// let worker = {
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }


solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});