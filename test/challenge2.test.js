// This file contains unit tests for the function implemented in challenge2.js. 
// It ensures that the solution works as expected.

const { functionName } = require('../src/challenge2');
const { battleHorde } = require('../src/challenge2');

describe('Challenge 2 Tests', () => {
    test('Test Case 1', () => {
        expect(functionName(input1)).toBe(expectedOutput1);
    });

    test('Test Case 2', () => {
        expect(functionName(input2)).toBe(expectedOutput2);
    });

    describe('Challenge 2 Tests', () => {
        test('Test Case 1', () => {
            expect(battleHorde('242', '334')).toBe('20h');
        });

        test('Test Case 2', () => {
            expect(battleHorde('123', '456')).toBe('15h');
        });

        test('Test Case 3', () => {
            expect(battleHorde('987', '654')).toBe('18z');
        });

        test('Test Case 4', () => {
            expect(battleHorde('111', '111')).toBe('x');
        });

        test('Test Case 5', () => {
            expect(battleHorde('555', '555')).toBe('x');
        });

        test('Test Case 6', () => {
            expect(battleHorde('321', '123')).toBe('3z');
        });

        // Add more test cases as needed
    });

    // Add more test cases as needed
});