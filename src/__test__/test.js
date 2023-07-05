import { sortValue } from "./index.js";

test('sort value health', () => {
    const value = {
        'мечник': 10,
        'маг': 100,
        'лучник': 80
    };
    
    const expectedStatus = {
        'маг': 100,
        'лучник': 80,
        'мечник': 10
    };
    
    const result = sortValue(value);
    expect(result).toEqual(expectedStatus);
});
