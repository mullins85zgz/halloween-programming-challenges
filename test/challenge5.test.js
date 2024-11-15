const escapePyramidHead = require('../src/challenge5');

test('Pyramid Head can reach the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(8);
});

test('Pyramid Head cannot reach the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(-1);
});

test('Pyramid Head is already at the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '▲'],
    ];
    expect(escapePyramidHead(room)).toBe(0);
});

test('Room with no obstacles', () => {
    const room = [
        ['.', '.', '.', '.', '▲'],
        ['.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(4);
});

test('Room with multiple obstacles', () => {
    const room = [
        ['.', '#', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(10);
});
test('Pyramid Head can reach the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(8);
});

test('Pyramid Head cannot reach the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(-1);
});

test('Pyramid Head is already at the target', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '▲'],
    ];
    expect(escapePyramidHead(room)).toBe(0);
});

test('Room with no obstacles', () => {
    const room = [
        ['.', '.', '.', '.', '▲'],
        ['.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(4);
});

test('Room with multiple obstacles', () => {
    const room = [
        ['.', '#', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(10);
});

test('Room with Pyramid Head surrounded by walls', () => {
    const room = [
        ['#', '#', '#', '#', '#'],
        ['#', '▲', '#', '.', '#'],
        ['#', '#', '#', '.', '#'],
        ['#', '#', '#', '.', '#'],
        ['T', '.', '.', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(-1);
});

test('Room with target surrounded by walls', () => {
    const room = [
        ['.', '.', '#', '.', '▲'],
        ['#', '.', '#', '.', '#'],
        ['.', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '#'],
        ['#', 'T', '#', '.', '.'],
    ];
    expect(escapePyramidHead(room)).toBe(-1);
});
