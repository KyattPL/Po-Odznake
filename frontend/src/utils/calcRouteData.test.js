import calcRouteData from './calcRouteData';

describe('calcRouteData.js', () => {

    test('calculate data for route', () => {
        expect(calcRouteData([{ 'latitude': '49.73503', 'longitude': '18.736479', 'height': '390' },
        { 'latitude': '49.750534', 'longitude': '19.970865', 'height': '329' }]))
            .toStrictEqual([88, 61, 88]);
    });

    test('calculate data for wrong param structure', () => {
        expect(calcRouteData({ 'latitude': '49.73503', 'longitude': '18.736479', 'height': '390' }
        )).toStrictEqual([0, 0, 0]);
    });

    test('calculate data for null params', () => {
        expect(() => calcRouteData(null)).toThrowError(TypeError);
    });
});