// function solve() {

//     const mage = (name) => {
//         profile = {
//             name,
//             health: 100,
//             mana: 100,
//             cast(spellName) {
//                 console.log(`${profile.name} cast ${spellName}`);
//                 profile.mana--;
//             }
//         }
//         return Object.assign(profile);
//     }

//     const letsFight = (profile) => ({
//         fight: () => {
//             console.log(`${profile.name} slashes at the foe!`);
//             profile.stamina--;
//         }
//     });

//     const fighter = (name) => {
//         profile = {
//             name,
//             health: 100,
//             stamina: 100,
//             // fight(){
//             //     console.log(`${profile.name} slashes at the foe!`);    // make it same with a method above which create it for the function;
//             //     profile.stamina--;
//             // }
//         }
//         return Object.assign(profile, letsFight(profile));
//     }

//     return ({ mage: mage, fighter: fighter })
// }

//----------------------------------------

// function solve() {
//     class Mage {
//         constructor(name) {
//                 this.name = name,
//                 this.health = 100,
//                 this.mana = 100
//         }
//         cast(spellName) {
//             this.mana--;
//             console.log(`${this.name} cast ${spellName}`);
//         }
//     }

//     class Fighter {
//         constructor(name) {
//                 this.name = name,
//                 this.health = 100,
//                 this.stamina = 100
//         }
//         fight() {
//             this.stamina--;
//             console.log(`${this.name} slashes at the foe!`);
//         }
//     }

//     let obj = {      // make obj with two obj inside... call the function mage and fighter to create new obj from the builded class
//         mage(name) {        
//             let mageObj = new Mage(name);
//             return mageObj;
//         },
//         fighter(name) {
//             let fighterObj = new Fighter(name);
//             return fighterObj;
//         }
//     }

//     return obj;
// }

//----------------------------------------

function solve(){
    const mageHero={
        mageProto: {
            cast: function (spell){
                console.log(`${this.name} cast ${spell}`);
                this.mana-=1;
            },
        },
        mage: function(name){
            const mageObj={
                ...this.mageProto,
                name,
                health:100,
                mana:100,
            }
            return mageObj;
        }
    };
    const fighterHero={
        fighterProto: {
            fight: function (){
                console.log(`${this.name} slashes at the foe!`);
                this.stamina--;
            },
        },
        fighter: function(name){
            const fighterObj={
                ...this.fighterProto,
                name,
                stamina:100,
                health:100
            }
            return fighterObj;
        }
    };


    const allHeroes={...mageHero,...fighterHero};

    return allHeroes;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
