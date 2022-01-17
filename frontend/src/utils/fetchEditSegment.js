export default async function fetchEditSegment(pointAId, pointBId, newDesc, dist, newPointAId, newPointBId) {
    return await fetch("/edit_segment", {
        body: {
            'point_a_id': pointAId, 'point_b_id': pointBId, 'description': newDesc, 'distance': dist,
            'new_point_a_id': newPointAId, 'new_point_b_id': newPointBId
        },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}