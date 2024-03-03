class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let resultWithNames = [];
        footballPlayers.forEach((element) => {
            let [name, age, playerValue] = element.split('/');
            playerValue = Number(playerValue);
            age = Number(age);

            if (!this.invitedPlayers.some((x) => x.name === name)) {
                this.invitedPlayers.push({ name, age, playerValue });
                resultWithNames.push(name);
            } else {
                let currName = this.invitedPlayers.find((x) => x.name === name);
                if (currName.playerValue < playerValue) {
                    currName.playerValue = playerValue;
                }
            }
        });
        return `You successfully invite ${resultWithNames.join(', ')}.`;
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let player = this.invitedPlayers.find((x) => x.name === name);
        console.log(player);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < player.playerValue) {
            let priceDifference = Math.abs(player.playerValue - playerOffer);
            throw new Error(
                `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
            );
        } else {
            player.playerValue = 'Bought';
            return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
        }
    }
    ageLimit(name, age) {
        let player = this.invitedPlayers.find((x) => x.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let difference = Math.abs(player.age - age);
        if (player.age < age) {
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }
    transferWindowResult() {
        let firstLine = `Players list:\n`;
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        let result = this.invitedPlayers.map(
            (x) => `Player ${x.name}-${x.playerValue}`
        );
        return firstLine + result.join('\n').trim();
    }
}
let fTeam = new FootballTeam('Barcelona', 'Spain');
console.log(
    fTeam.newAdditions([
        'Kylian Mbappé/23/160',
        'Lionel Messi/35/50',
        'Pau Torres/25/52',
    ])
);
console.log(fTeam.signContract('Lionel Messi/60'));
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.signContract('Barbukov/10'));
