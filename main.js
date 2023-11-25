const generateRandomSet = () => {
    const uniqueRandomNumbers = new Set();

    while (uniqueRandomNumbers.size < 10000) {
      const randomNumber = Math.floor(Math.random() * 10000) + 1;
      uniqueRandomNumbers.add(randomNumber);
    }

    return Array.from(uniqueRandomNumbers);
  };

  module.exports = {
    generateRandomSet,
  };



  generateRandomSet();