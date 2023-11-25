const { generateRandomSet } = require('./main.js');

test('Generated set has 10,000 unique numbers', () => {
  const generatedSet = generateRandomSet();
  expect(Array.from(generatedSet)).toHaveLength(10000);
  expect(new Set(generatedSet).size).toBe(10000);
});
