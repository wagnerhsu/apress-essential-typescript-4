import { sum } from '../src/calc'

test('check result value', () => {
    let result = sum(10, 20, 30);
    expect(result).toBe(60);
})

