class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else if (this.resources <= 0) {
            return "You don't have enough resources to start the hike";
        }
        let diff = this.resources - time * 10;
        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= time * 10;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }
    rest(time) {
        let resourcesBeforeRest = this.resources;
        this.resources += time * 10;
        if (this.resources >= 100) {
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${
                this.resources - resourcesBeforeRest
            }% resources`;
        }
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'hard' || criteria === 'easy') {
            if(!this.listOfHikes.find(x=>x.difficultyLevel===criteria)){
                return `${this.username} has not done any ${criteria} hiking yet`
            }else{
                let filterHikes=this.listOfHikes.filter(x=>x.difficultyLevel===criteria).sort((a,b)=>a.time-b.time);
                return `${this.username}'s best ${criteria} hike is ${filterHikes[0].peak} peak, for ${filterHikes[0].time} hours`
            }
        }else if(criteria==='all'){
            let result=`All hiking records:\n`
            this.listOfHikes.map(x=>result+=`${this.username} hiked ${x.peak} for ${x.time} hours\n`);
            return result.trim();
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
user.hike('Musala', 2, 'hard');

console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
