function Inventory(arrayOfHeroes) {
  let heroes = [];
  arrayOfHeroes.forEach((line) => {
    let [heroName, heroLevel, heroItems] = line.split(" / ");
    let currHero = {
      heroName: heroName, // Може и само първото да се изпиши, когато са еднакви имената на key И value
      heroLevel: Number(heroLevel),
      heroItems: heroItems,
    };
    heroes.push(currHero);
  });

  let sorted = heroes.sort((a, b) => a.heroLevel - b.heroLevel);

  for (const currHero of sorted) {
    console.log(`Hero: ${currHero.heroName}`);
    console.log(`level => ${currHero.heroLevel}`);
    console.log(`items => ${currHero.heroItems}`);
  }
}
Inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
