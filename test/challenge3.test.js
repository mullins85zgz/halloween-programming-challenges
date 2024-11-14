// FILE: /programming-challenges/programming-challenges/test/challenge3.test.js
const { solveChallenge3 } = require('../src/challenge3');
const findSafestPath = require('../src/challenge3');

describe('Challenge 3 Tests', () => {
    test('Test case 1', () => {
        const input = [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ];
        const expectedOutput = 7;
        expect(findSafestPath(input)).toEqual(expectedOutput);
    });

    test('Test case 2', () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expectedOutput = 21;
        expect(findSafestPath(input)).toEqual(expectedOutput);
    });

    test('Test case 3', () => {
        const input = [
            [1, 2],
            [1, 1],
        ];
        const expectedOutput = 3;
        expect(findSafestPath(input)).toEqual(expectedOutput);
    });

    test('Test case 4', () => {
        const input = [
            [5],
        ];
        const expectedOutput = 5;
        expect(findSafestPath(input)).toEqual(expectedOutput);
    });

    test('Test case 5', () => {
        const input = [
            [1, 2, 3, 4],
            [2, 2, 2, 2],
            [3, 3, 3, 3],
        ];
        const expectedOutput = 12;
        expect(findSafestPath(input)).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});