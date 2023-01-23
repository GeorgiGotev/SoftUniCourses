let propertyName = 'stamat stamatov';

let phoneBook = {
  ivaylo: '0885456542',
  'peter ivanov':  '85135156511',
  [propertyName]: '564654133512', // dynamic property name
};

console.log(phoneBook.ivaylo);
console.log(phoneBook['peter ivanov']);
console.log(phoneBook[propertyName]);
