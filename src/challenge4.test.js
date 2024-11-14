const findTheKiller = require('./challenge4');

describe('findTheKiller', () => {
    test('should return the correct killer when there is only one match', () => {
        const whisper = 'd~~~~~a';
        const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
        expect(findTheKiller(whisper, suspects)).toBe('Dracula');
    });

    test('should return all matching suspects separated by commas', () => {
        const whisper = '~r~dd~';
        const suspects = ['Freddy', 'Freddier', 'Fredderic'];
        expect(findTheKiller(whisper, suspects)).toBe('Freddy,Freddier,Fredderic');
    });

    test('should return an empty string when no suspects match the whisper', () => {
        const whisper = '~r~dd$';
        const suspects = ['Freddy', 'Freddier', 'Fredderic'];
        expect(findTheKiller(whisper, suspects)).toBe('');
    });

    test('should return the correct killer when the whisper matches partially', () => {
        const whisper = 'mi~~def';
        const suspects = ['Midudev', 'Midu', 'Madeval'];
        expect(findTheKiller(whisper, suspects)).toBe('Midudev');
    });

    test('should return the correct killer when the whisper ends with $', () => {
        const whisper = '~~~~~~$';
        const suspects = ['Pennywise', 'Leatherface', 'Agatha'];
        expect(findTheKiller(whisper, suspects)).toBe('Agatha');
    });
});