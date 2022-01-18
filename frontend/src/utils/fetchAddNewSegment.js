export default async function fetchAddNewSegment(desc, dist, pointAId, pointBId) {
    return await fetch("/add_new_segment", {
        body: JSON.stringify({ 'description': desc, 'distance': dist, 'point_a_id': pointAId, 'point_b_id': pointBId }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}