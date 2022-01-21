import calcDistance from './calcDistance';

describe('calcDistance.js', () => {

    test('calculate distance for correct params', () => {
        expect(Number.parseInt(calcDistance({ 'latitude': '49.73503', 'longitude': '18.736479' },
            { 'latitude': '49.750534', 'longitude': '19.970865' }))).toBe(88714);
    });

    test('calculate distance for incorrect params', () => {
        expect(() => calcDistance(null, null)).toThrowError(TypeError);
    });
});