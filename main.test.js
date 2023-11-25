const { generateRandomSet } = require('./main.js');

test('Generated set has 10,000 unique numbers', () => {
  const generatedSet = generateRandomSet();
  expect(generatedSet.size).toBe(10000);
});

test('Generated numbers are in a random order', () => {
  const generatedSet1 = generateRandomSet();
  const generatedSet2 = generateRandomSet();
  expect(Array.from(generatedSet1)).not.toEqual(Array.from(generatedSet2));
});
