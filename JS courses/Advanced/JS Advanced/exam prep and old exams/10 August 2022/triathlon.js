class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        } else {
            return `${participantName} has already been added to the list`;
        }
    }
    completeness(participantName, condition) {
        let result = condition / 30;
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(
                `${participantName} is not in the current participants list`
            );
        } else {
            if (condition < 30) {
                throw new Error(
                    `${participantName} is not well prepared and cannot finish any discipline`
                );
            } else if (result >= 1 && result < 3) {
                return `${participantName} could only complete ${Math.floor(
                    result
                )} of the disciplines`;
            } else if (result >= 3) {
                this.listOfFinalists.push({
                    participantName,
                    gender: this.participants[participantName],
                });
                delete this.participants[participantName];
                return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
    }
    rewarding (participantName){
        let check=this.listOfFinalists.find(x=>x.participantName===participantName);
        if(!check){
            return `${participantName} is not in the current finalists list`
        }else{
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }
    showRecord (criteria){
        if(this.listOfFinalists.length===0){
          return 'There are no finalists in this competition'
        }
        if(criteria==='male' || criteria==='female'){
           let result= this.listOfFinalists.find(x=>x.gender===criteria);
           if(!result){
            return `There are no ${criteria}'s that finished the competition`;
           }else{
            return `${result.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`
           }
        }else if(criteria==='all'){
            let firstLines= `List of all ${this.competitionName} finalists:\n`;
            this.listOfFinalists.sort((a,b)=>a.participantName.localeCompare(b.participantName));
            let result=this.listOfFinalists.map(x=>`${x.participantName}\n`);
            return firstLines + result.join('').trim();
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("all"));


