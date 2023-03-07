function worldTour(input) {
    let line = input.shift();

    while (line !== 'Travel') {
        console.log(line);

        line=input.shift();
    }
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);