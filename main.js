const generateRandomSet = () => {
    const uniqueRandomNumbers = new Set();

    while (uniqueRandomNumbers.size < 10000) {
      uniqueRandomNumbers.add(Math.floor(Math.random() * 10000) + 1);
    }

    return uniqueRandomNumbers;
  };

// This console.log() will log the unique Set via `node main.js`
  console.log(Array.from(generateRandomSet()));

module.exports = { generateRandomSet };