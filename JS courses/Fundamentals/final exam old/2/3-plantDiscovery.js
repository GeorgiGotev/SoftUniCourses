function plantDiscovery(data) {

    let n = Number(data.shift());
    let store = {};
    let plant = data.shift();

    for (let i = 0; i < n; i++) {
        let [plantName, plantRarity] = plant.split('<->');
        plantRarity = Number(plantRarity);
        store[plantName] = { plantRarity, plantRating: [] };
        plant = data.shift();
    }
    
    while (plant !== 'Exhibition') {
        let [command, plantInfo] = plant.split(': ');
        let [plantName, stats] = plantInfo.split(' - ');
        stats = Number(stats);

        switch (command) {
            case 'Rate':
                if (store.hasOwnProperty(plantName)) {
                    store[plantName].plantRating.push(stats);
                } else {
                    console.log('error');
                }
                break;
            case 'Update':
                if (store.hasOwnProperty(plantName)) {
                    store[plantName].plantRarity = stats;
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':
                if (store.hasOwnProperty(plantName)) {
                    store[plantName].plantRating = [];
                } else {
                    console.log('error');
                }
                break;
            default: console.log('error'); break;
        }

        plant = data.shift();
    }
    console.log('Plants for the exhibition:');
    for (const key in store) {
        let ratingSum = 0;
        let avg = 0;
        for (const rating of store[key].plantRating) {
            ratingSum += rating
        }

        if (store[key].plantRating.length !== 0) {
            avg = ratingSum / store[key].plantRating.length;

        } else {
            store[key].plantRating = 0;
        }
        
        console.log(`- ${key}; Rarity: ${store[key].plantRarity}; Rating: ${avg.toFixed(2)}`);

    }

}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
);