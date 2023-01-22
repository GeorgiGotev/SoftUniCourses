function cats(catsInfo) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let cats of catsInfo) {
    let [name, age] = cats.split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
