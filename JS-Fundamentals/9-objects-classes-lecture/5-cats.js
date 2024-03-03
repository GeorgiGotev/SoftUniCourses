function cats(catsInfo) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let el of catsInfo) {
    let [name, age] = el.split(" ");
    cats.push(new Cat(name, age));
  }
  cats.forEach((x) => x.meow());
}
cats(["Mellow 2", "Tom 5"]);
