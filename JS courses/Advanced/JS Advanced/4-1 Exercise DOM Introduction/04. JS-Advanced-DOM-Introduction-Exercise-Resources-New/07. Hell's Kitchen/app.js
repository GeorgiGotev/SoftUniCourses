function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick() {
      let inputArea = document.querySelector('#inputs textarea');
      let bestRest = document.querySelector('#bestRestaurant p');
      let bestRestWorkers = document.querySelector('#workers p');

      let obj = JSON.parse(inputArea.value);


      for (const line of obj) {
         let [name, workersData] = line.split(' - ');
         let workersInfo = workersData && workersData.split(', ');

         if (!result.find(r => r.name === name)) {
            result.push({
               name,
               sumSalary: 0,
               avgSalary: 0,
               bestSalary: 0,
               workers: [],
            });
         }
         let currRest = result.find(e => e.name === name);
         for (const worker of workersInfo) {
            let [workerName, workerSalary] = worker.split(' ');
            workerSalary = Number(workerSalary);

            currRest.sumSalary += workerSalary;

            if (currRest.bestSalary < workerSalary) {
               currRest.bestSalary = workerSalary;
            }
            currRest.workers.push({
               workerName,
               workerSalary,
            })
         }
         currRest.avgSalary = (currRest.sumSalary / currRest.workers.length).toFixed(2);
      }

      let bestRestName = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      let workersSorted = bestRestName.workers.sort((a, b) => b.workerSalary - a.workerSalary);
      let buf = '';
      bestRest.textContent = `Name: ${bestRestName.name} Average Salary: ${bestRestName.avgSalary} Best Salary: ${bestRestName.workers[0].workerSalary.toFixed(2)}`;
      for (const worker of bestRestName.workers) {
         buf += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `;
      }
      bestRestWorkers.textContent = buf;
   }
}


