const { generateRandomSet } = require('./main');

test('Generated set has 10,000 unique numbers', () => {
  const generatedSet = generateRandomSet();
  expect(generatedSet).toHaveLength(10000);
  expect(new Set(generatedSet)).toHaveLength(10000);
});
