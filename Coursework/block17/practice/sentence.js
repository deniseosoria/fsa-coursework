class Sentence {
  data;

  constructor(givenData) {
    this.data = givenData;
  }

  getWordCount() {
    if (this.data) {
      let wordsArray = this.data.split(" ");
      return wordsArray.length;
    }
    return 0;
  }

  hasLetter(letter) {
    return this.data.indexOf(letter) !== -1;
  }

  letterCount(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }

  stats() {
    const obj = {};
    const words = this.data.split(" ");
    words.forEach((word) => {
      if (obj[word] === undefined) {
        obj[word] = 0;
      }
      obj[word]++;
    });
    return obj;
  }
}

let givenData = prompt(
  "Enter a sentence: ",
  "the quick brown fox jumped over the fence"
);

const mySentence = new Sentence(givenData);

console.log(mySentence.getWordCount());
console.log(mySentence.hasLetter("X"));
console.log(mySentence.hasLetter("q"));
console.log(mySentence.letterCount("e"));
console.log(mySentence.letterCount(" "));
console.log(mySentence.stats());
