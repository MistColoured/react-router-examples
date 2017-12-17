class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
}

const me = new Student('Mike Allen', 47, 'Coder');

console.log(me.hasMajor());

const other = new Student();
console.log(other.hasMajor());

