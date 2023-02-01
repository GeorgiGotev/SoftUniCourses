function softUniReception(input) {

    let clients = Number(input.pop());
    let sumClientsPerHour = 0;
    input.forEach(element => sumClientsPerHour += Number(element));
    let timeCounter = 0;
    while (clients > 0) {
        timeCounter++;
        if (!(timeCounter % 4 === 0)) {
            clients -= sumClientsPerHour;
        }
    }
    console.log(`Time needed: ${timeCounter}h.`);
}
softUniReception(['3', '2', '5', '40']);