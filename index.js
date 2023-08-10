function sum() {
  const num1 = +prompt('Enter the first number:');
  const num2 = +prompt('Enter the second number:');
  const result = num1 + num2;
  alert(`The result is ${result}`);
  return result;
}

function convert() {
  const minutes = +prompt('Enter the number of minutes:');
  const converter = minutes * 60;
  alert(`There are ${converter} seconds in ${minutes} minutes`);
}

function compareNumbers() {
  const num1 = +prompt('Enter the first number:');
  const num2 = +prompt('Enter the second number:');

  if (num1 < num2) {
    alert(`The first number is less than the second number`);
  } else if (num1 > num2) {
    alert(`The first number is not less than the second number`);
  }
}

function generateRandom() {
  const random = +prompt('Enter your maximum number:');
  const randomNumber = Math.ceil(Math.random() * random);
  alert(`I have generated the random number: ${randomNumber}`);
}

function countWords() {
  let count = 1;
  const sentence = prompt('Enter a sentence to count the words:');
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      count++;
    }
  }
  alert(`There are ${count} words in the sentence.`);
}

function randomRange() {
  const randomMin = +prompt('Enter the minimum number:');
  const randomMax = +prompt('Enter the maximum number:');
  const ranRange =
    Math.ceil(Math.random() * (randomMax - randomMin)) + randomMin;

  alert(`I have generated the random number: ${ranRange}`);
}

function capitalize() {
  const capitalSentence = prompt(
    'Enter a sentence to capitalize the first letter of each word:'
  );
  let words = capitalSentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const capitalizedSentence = words.join(' '); // Join the words back into a sentence

  alert(`${capitalizedSentence}`);
  return capitalizedSentence;
}

let countApp = 0;
function runApp() {
  countApp++; // Increment the count each time the function is called

  // Call the specific function based on user input
  const operation = prompt(
    'What task would you like to run? sum, convert, low, random, wordCounter, randomRange, capitalize, or quit?'
  );

  if (operation === 'sum') {
    sum();
  } else if (operation === 'convert') {
    convert();
  } else if (operation === 'low') {
    compareNumbers();
  } else if (operation === 'random') {
    generateRandom();
  } else if (operation === 'wordCounter') {
    countWords();
  } else if (operation === 'randomRange') {
    randomRange();
  } else if (operation === 'capitalize') {
    capitalize();
  } else if (operation === 'quit') {
    quit();
  } else {
    alert('Invalid operation selected.');
  }

  // After the function is complete, prompt for the next operation
  const continuePrompt = confirm('Do you want to perform another task?');
  if (continuePrompt) {
    runApp();
  } else {
    quit();
  }
}

runApp(); // Start the application
