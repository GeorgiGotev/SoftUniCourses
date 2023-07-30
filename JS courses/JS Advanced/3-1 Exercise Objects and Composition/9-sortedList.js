function createSortedList() {

    let specialObj = {
        numbers: [],

        add: function (num) {
            this.numbers.push(num);
            this.numbers.sort(this.sorting);
            this.size++;
            return specialObj;
        },
        remove: function (index) {
            this.validate(index);
            this.numbers.splice(index, 1);
            this.size--;
            return specialObj;
        },
        get: function (index) {
            this.validate(index)
            return this.numbers[index];
        },
        size: 0,
        sorting: function (a, b) {
            return a - b;
        },
        validate: function (index) {
            if (index < 0 || index >= this.numbers.length) {
                throw new Error('Error');
            }
        }
    }
    return specialObj;
}




let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.numbers);

