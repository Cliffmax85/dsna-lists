
const sentence = 'this is a sentence'

function reverseWords(sentence) {
    const splitSentence = sentence.split();
    const splitLetters = splitSentence.split().reverse().join(' ');
    console.log(splitLetters);
    return splitLetters();

}

function oddishOrEvenish(number) {
    const someNumber = number.toString().split().map((item) => +item).reduce((a, b) => a + b);
    if (someNumber % 2 === 0) {
        return "evenish"
    } else {
        return "oddish"
    }
}

function titleCase(sentence) {
  const lowerCase = sentence.toLowerCase();
  const words = lowerCase
    .split(" ")
    .map((item) => {
      item.slice(0, 1).toUpperCase();
    })
    .join(" ");
  return words;
}
console.log("alchemy ROCKS goLD");

function fizzBuzz(number) {
    let fizzy = [];
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            fizzy.push('FizzBuzz'); 
        } if (i % 3 === 0) {
            fizzy.push('fizz');
        } if (i % 5 === 0) {
            fizzy.push('buzz');
        } 
        } else {
            fizzy.push(i);
        }
    } 
    return fizzy;
}

function uniqueString(strings) {
    const stringArr = [];

}

function anagrams(wordOne, wordTwo) {
    const first = wordOne.split('').sort().join('');
    const second = wordTwo.split('').sort().join('');

    return first === second;
}

function uniqueString(strings) {
    const orderedLetters = strings.map((s) => [...new Set(s)].sort());
    const duplicates = [...new Set(...orderedLetters)];
    return strings.find((string) => {
      return duplicates.indexOf(string[0]) === -1;
    });
  }
  
