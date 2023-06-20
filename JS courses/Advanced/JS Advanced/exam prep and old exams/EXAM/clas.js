class JobOffers{
    constructor(employer, position){
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates){
        let result;
        candidates.forEach(line => {
            let [name,education,yearsExperience] = line.split('-');
            let findPerson = this.jobCandidates.find(x => x.name === name);
            if (!findPerson){
                this.jobCandidates.push({name, education, yearsExperience})
            } else {
                if (yearsExperience > findPerson.yearsExperience){
                    findPerson.yearsOfExperience = Number(yearsExperience)
                }
            }
            result = this.jobCandidates.map(x => x.name);
        })
        return `You successfully added candidates: ${result.join(', ')}.`;
    }
    jobOffer(chosenPerson){
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience)
        let findPerson = this.jobCandidates.find(x => x.name === name);
        if (!findPerson){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (minimalExperience > findPerson.yearsExperience){
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        }
        findPerson.yearsExperience = 'hired';
         return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name){
        let findPerson = this.jobCandidates.find(x => x.name === name);
        if (!findPerson){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (findPerson.education === 'Bachelor'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (findPerson.education === 'Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase(){
        if (this.jobCandidates.length === 0){
            throw new Error ('Candidate Database is empty!')
        }
        let result = ['Candidates list:']
        this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name)).map(x => result.push(`${x.name}-${x.yearsExperience}`));
        return result.join('\n').trim();
    }
}