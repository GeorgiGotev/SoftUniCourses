function TheLift(arr) {
    let queue = Number(arr[0]);
    let cabins = arr[1].split(' ').map(Number)
    for (let i = 0; i < cabins.length; i++) {
      while (cabins[i] < 4 && queue > 0) {
        cabins[i] ++;
        queue --;
      }
    }
    if (queue > 0) {
      console.log(`There isn't enough space! ${queue} people in a queue!
${cabins.join(' ')}`);
    } else if (queue === 0 && cabins[cabins.length - 1] === 4) {    // няма проверка дали освен последната някоя друга кабинка не е празна
      console.log(`${cabins.join(' ')}`);
    } else {
      console.log(`The lift has empty spots!
  ${cabins.join(' ')}`);
    }
  }
   
  TheLift(['1', '0 4']);