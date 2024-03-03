class JobOffers {
    constructor(employer,position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        let result;
        candidates.forEach((p) => {
            let [name, education, yearsExperience] = p.split('-');
            let check = this.jobCandidates.find((x) => x.name === name);
            if (check) {
                if (check.yearsExperience < yearsExperience) {
                    check.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
            result = this.jobCandidates.map((x) => x.name);
        });
        return `You successfully added candidates: ${result.join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let currPerson = this.jobCandidates.find((x) => x.name === name);
        if (!currPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (currPerson.yearsExperience < minimalExperience) {
            throw new Error(
                `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
            );
        }
        currPerson.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }
    salaryBonus(name){
        let currPerson = this.jobCandidates.find((x) => x.name === name);
        if (!currPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if(currPerson.education==='Bachelor'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }else if(currPerson.education==='Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }else{
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase(){
       if(this.jobCandidates.length===0){
        throw new Error('Candidate Database is empty!')
       }
       let result=['Candidates list:'];
       this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name)).map(x=>result.push(`${x.name}-${x.yearsExperience}`));
       return result.join('\n').trim();
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());


