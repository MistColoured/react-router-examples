const multiplier = {
  numbers: [5, 2, 3],
  multiplyBy: 12,
  multiply() {
    return this.numbers.map(toffee => toffee * this.multiplyBy)
  }
};

console.log(multiplier.multiply());
