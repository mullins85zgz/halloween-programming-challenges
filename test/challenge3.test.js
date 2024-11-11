// FILE: /programming-challenges/programming-challenges/test/challenge3.test.js
const { solveChallenge3 } = require('../src/challenge3');

describe('Challenge 3 Tests', () => {
    test('Test case 1', () => {
        expect(solveChallenge3(input1)).toEqual(expectedOutput1);
    });

    test('Test case 2', () => {
        expect(solveChallenge3(input2)).toEqual(expectedOutput2);
    });

    // Add more test cases as needed
});