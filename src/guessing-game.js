class GuessingGame {

  constructor(num) {
    this.num = num;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    let mid = Math.round((this.min + this.max) / 2);
    if (mid > this.num) {
      this.lower;
    } else if (mid < this.num) {
      this.greater;
    } else {
      return mid;
    }
  }

  lower() {
    this.min = this.min;
    this.max = Math.round((this.min + this.max) / 2);
  }

  greater() {
    this.min = Math.round((this.min + this.max) / 2);
    this.max = this.max;
  }
}

module.exports = GuessingGame;