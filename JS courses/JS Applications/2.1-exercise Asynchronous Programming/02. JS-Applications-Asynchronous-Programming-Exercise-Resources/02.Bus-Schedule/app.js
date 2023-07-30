function solve() {
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let infoField = document.querySelector('.info');

    let baseUrl = `http://localhost:3030/jsonstore/bus/schedule/`;

    let stopId = {
        name: '',   
        next: 'depot',
    };

    async function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        let res = await fetch(baseUrl + stopId.next);
        let data = await res.json(); 
            
        infoField.textContent = `Next stop ${data.name}`;
        stopId = data;
    }

    async function arrive() {
        infoField.textContent = `Arriving at ${stopId.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;

    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
