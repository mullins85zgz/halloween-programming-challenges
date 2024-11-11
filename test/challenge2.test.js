// This file contains unit tests for the function implemented in challenge2.js. 
// It ensures that the solution works as expected.

const { functionName } = require('../src/challenge2');

describe('Challenge 2 Tests', () => {
    test('Test Case 1', () => {
        expect(functionName(input1)).toBe(expectedOutput1);
    });

    test('Test Case 2', () => {
        expect(functionName(input2)).toBe(expectedOutput2);
    });

    // Add more test cases as needed
});