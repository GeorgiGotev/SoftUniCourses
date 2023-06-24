async function getInfo() {
    let inputField = document.getElementById('stopId');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${inputField.value}`;
    let stopName = document.getElementById('stopName');
    let busStops = document.getElementById('buses');

    busStops.replaceChildren();
    inputField.value = '';

    try {
        let res = await fetch(url);
        let data = await res.json();

        stopName.textContent = data.name;
        Object.entries(data.buses).map((busInfo) => {
            let li = document.createElement('li');
            li.textContent = `Bus ${busInfo[0]} arrives in ${busInfo[1]} minutes`;
            busStops.appendChild(li);
        });
    } catch (err) {
        stopName.textContent = 'Error';
    }
}
