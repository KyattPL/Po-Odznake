// TODO: jak liczy się te punkty GOT?
export default function calcRouteData(points) {

    let distanceSum = 0;
    let altitudeSum = 0;
    let pointsSum = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const R = 6371e3;
        const φ1 = points[i]['latitude'] * Math.PI / 180;
        const φ2 = points[i + 1]['latitude'] * Math.PI / 180;
        const Δφ = (points[i + 1]['latitude'] - points[i]['latitude']) * Math.PI / 180;
        const Δλ = (points[i + 1]['longitude'] - points[i]['longitude']) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        distanceSum += (R * c) / 1000;
        altitudeSum += Math.abs(points[i]['height'] - points[i + 1]['height']);
    }

    pointsSum = Number.parseInt(distanceSum) + Number.parseInt(altitudeSum / 100);
    return [Number.parseInt(distanceSum), altitudeSum, pointsSum];
}