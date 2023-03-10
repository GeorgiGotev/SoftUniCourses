function worldTour(input) {
    let resultString = input.shift();
    let line = input.shift();

    while (line !== 'Travel') {
        let [command, index1, index2] = line.split(':');
        switch (command) {
            case 'Add Stop':
                index1 = Number(index1);
                if (index1 >= 0 && index1 < resultString.length) {
                    resultString = resultString.substring(0, index1) + index2 + resultString.substring(index1);
                }
                console.log(resultString);
                break;
            case 'Remove Stop':
                index1 = Number(index1);
                index2 = Number(index2);
                if (index1 >= 0 && index1 < resultString.length && index2 >= 0 && index2 < resultString.length) {
                    resultString = resultString.slice(0, index1) + resultString.slice(index2 + 1);
                }
                console.log(resultString);
                break;
            case 'Switch':
                if (resultString.includes(index1)) {
                    resultString = resultString.replace(index1, index2);
                }
                console.log(resultString);
                break;
        }

        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${resultString}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);