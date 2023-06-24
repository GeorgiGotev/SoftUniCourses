function attachEvents() {
    let getBtn = document.getElementById('submit');
    let inputField = document.getElementById('location');
    let forecast = document.getElementById('forecast');
    getBtn.addEventListener('click', showWeather);
    let urlLocations = `http://localhost:3030/jsonstore/forecaster/locations`;
    let urlCurrent = `http://localhost:3030/jsonstore/forecaster/today/`;
    let urlNextDays = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
    let divCurr = document.getElementById('current');
    let divUpcoming = document.getElementById('upcoming');

    let dictionarySymbol = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        // Degrees: '&#176',
    };

    async function showWeather(e) {
        try {
            // divCurr.replaceChildren();
            // forecast.textContent='';
            let resLocation = await fetch(urlLocations);
            let dataLocation = await resLocation.json();
            forecast.style.display = 'block';
            // console.log(dataLocation);

            let currLocation = dataLocation.find(
                (x) => x.name === inputField.value
            );
            let code = currLocation.code;
            console.log(code);
            let resCurr = await fetch(urlCurrent + code);
            let dataCurr = await resCurr.json();

            //curr state
            let divForecasts = document.createElement('div');
            divForecasts.setAttribute('class', 'forecasts');
            let spanSymbol = document.createElement('span');
            spanSymbol.setAttribute('class', 'condition symbol');
            spanSymbol.innerHTML =
                dictionarySymbol[dataCurr.forecast.condition];
            let spanConditions = document.createElement('span');
            spanConditions.setAttribute('class', 'condition');
            let span1 = document.createElement('span');
            span1.setAttribute('class', 'forecast-data');
            span1.textContent = dataCurr.name;
            let span2 = document.createElement('span');
            span2.setAttribute('class', 'forecast-data');
            span2.innerHTML = `${dataCurr.forecast.low}&#176;/${dataCurr.forecast.high}&#176;`;
            let span3 = document.createElement('span');
            span3.textContent = dataCurr.forecast.condition;
            span3.setAttribute('class', 'forecast-data');

            divForecasts.appendChild(spanSymbol);
            divForecasts.appendChild(spanConditions);
            spanConditions.appendChild(span1);
            spanConditions.appendChild(span2);
            spanConditions.appendChild(span3);
            divCurr.appendChild(divForecasts);

            let resNext = await fetch(urlNextDays + code);
            let dataNext = await resNext.json();

            let divNext = document.createElement('div');
            divNext.setAttribute('class', 'forecast-info');
            divUpcoming.appendChild(divNext);

            dataNext.forecast.forEach((element) => {
                let spanUpcoming = document.createElement('span');
                spanUpcoming.setAttribute('class', 'upcoming');
                let spanNext1 = document.createElement('span');
                spanNext1.setAttribute('class', 'symbol');
                spanNext1.innerHTML = dictionarySymbol[element.condition];
                let spanNext2 = document.createElement('span');
                spanNext2.setAttribute('class', 'forecast-data');
                spanNext2.innerHTML = `${element.low}&#176;/${element.high}&#176;`;
                let spanNext3 = document.createElement('span');
                spanNext3.setAttribute('class', 'forecast-data');
                spanNext3.textContent = element.condition;

                spanUpcoming.appendChild(spanNext1);
                spanUpcoming.appendChild(spanNext2);
                spanUpcoming.appendChild(spanNext3);
                divNext.appendChild(spanUpcoming);
            });

            inputField.value = '';
        } catch (err) {
            forecast.style.display='block';
            forecast.textContent='Error'
        }
    }
}

attachEvents();
