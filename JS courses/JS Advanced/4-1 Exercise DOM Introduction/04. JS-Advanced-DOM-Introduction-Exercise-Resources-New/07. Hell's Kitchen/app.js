function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let result = [];
    let inputArea = document.querySelector('#inputs textarea');
    let bestRest = document.querySelector('#bestRestaurant p');
    let bestRestWorkers = document.querySelector('#workers p');

    function onClick() {
        let obj = JSON.parse(inputArea.value);
        for (const line of obj) {
            let [name, workersData] = line.split(' - ');
            let workersInfo = workersData && workersData.split(', ');
            if (!result.find((r) => r.name === name)) {
                // if restaurant is not in result arr, create it...
                result.push({
                    name,
                    sumSalary: 0,
                    avgSalary: 0,
                    bestSalary: 0,
                    workers: [],
                });
            }
            let currRest = result.find((e) => e.name === name); // finding curr rest
            workersInfo.forEach((worker) => {
                updateRestaurant(currRest, worker); // make a func to update restaurant info from workersData;
            });
            currRest.avgSalary = (
                currRest.sumSalary / currRest.workers.length
            ).toFixed(2);
        }
        let bestRestName = result.sort((a, b) => b.avgSalary - a.avgSalary)[0]; //sort restaurants, best is with high avgSalary
        bestRestName.workers.sort((a, b) => b.workerSalary - a.workerSalary); //sort workers dsc..
        bestRest.textContent = `Name: ${bestRestName.name} Average Salary: ${
            bestRestName.avgSalary
        } Best Salary: ${bestRestName.workers[0].workerSalary.toFixed(2)}`;
        // best rest is first result, and we have to show it with text content
        let buf = '';
        for (const worker of bestRestName.workers) {
            // loop for every worker, because it is arr of workers with nested objs..
            buf += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `; //concatenate this string in buff variable.
        }
        bestRestWorkers.textContent = buf; //second result for best workers salary
        function updateRestaurant(curr, workersData) {
            let [workerName, workerSalary] = workersData.split(' ');
            workerSalary = Number(workerSalary);
            curr.workers.push({
                //create array with workers for current restaurant, it saves me in case of income same name of restaurant.
                workerName,
                workerSalary,
            });
            curr.sumSalary += workerSalary;
            if (curr.bestSalary < workerSalary) {
                curr.bestSalary = workerSalary;
            }
        }
    }
}


