export default async function fetchDeleteSegment(pointAId, pointBId) {
    return await fetch("/delete_segment", {
        body: JSON.stringify({ 'point_a_id': pointAId, 'point_b_id': pointBId }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}