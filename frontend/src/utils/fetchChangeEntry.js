export default async function fetchChangeEntry(startDate, endDate, tripId, newTripId) {

    let start = new Date(startDate);
    let startLocal = start.toLocaleString("pl").split(',')[0];

    let end = new Date(endDate);
    let endLocal = end.toLocaleString("pl").split(',')[0];

    return await fetch("/change_entry", {
        body: JSON.stringify({ 'new_start_date': startLocal, 'new_end_date': endLocal, 'trip_id': tripId, 'new_trip_id': newTripId }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}