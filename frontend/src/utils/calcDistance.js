export default function calcDistance(pointA, pointB) {

    const R = 6371e3;
    const φ1 = pointA['latitude'] * Math.PI / 180;
    const φ2 = pointB['latitude'] * Math.PI / 180;
    const Δφ = (pointB['latitude'] - pointA['latitude']) * Math.PI / 180;
    const Δλ = (pointB['longitude'] - pointA['longitude']) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distanceSum = (R * c); //w metrach jest

    return distanceSum;
}