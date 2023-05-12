function solve(worker) {
    if (worker.dizziness === true) {
        worker.dizziness = false;
        worker.levelOfHydrated += worker.weight * worker.experience / 10;
    }

    return worker;

}
let worker = {
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}


solve(worker);