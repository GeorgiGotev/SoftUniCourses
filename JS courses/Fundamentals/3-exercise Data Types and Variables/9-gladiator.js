function gladiator(
  lostFights,
  helmedPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let sword = 0;
  let shield = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      expenses += helmedPrice;
    }
    if (i % 3 === 0) {
      sword++;
      expenses += swordPrice;
      if (sword % 2 === 0) {
        shield++;
        expenses += shieldPrice;
        if (shield % 2 === 0) {
          expenses += armorPrice;
        }
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5);
