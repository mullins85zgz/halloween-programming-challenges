describe('Challenge 1', () => {
    const { createMagicPotion } = require('../src/challenge1');

    test('should return expected result for input 1', () => {
        const potions = [4, 5, 6, 2];
        const goal = 8;
        expect(createMagicPotion(potions, goal)).toEqual([2, 3]);
    });

    test('should return expected result for input 2', () => {
        const potions = [1, 2, 3, 4, 5];
        const goal = 9;
        expect(createMagicPotion(potions, goal)).toEqual([3, 4]);
    });

    test('should return empty array if no combination found', () => {
        const potions = [1, 2, 3];
        const goal = 7;
        expect(createMagicPotion(potions, goal)).toEqual([]);
    });

    test('should handle negative numbers', () => {
        const potions = [-1, -2, -3, -4, 5];
        const goal = 1;
        expect(createMagicPotion(potions, goal)).toEqual([0, 4]);
    });

    test('should handle empty array', () => {
        const potions = [];
        const goal = 5;
        expect(createMagicPotion(potions, goal)).toEqual([]);
    });

    // Add more tests as needed
});