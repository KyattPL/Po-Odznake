export default async function fetchChangeEntry(startDate, endDate, tripId, newTripId) {
    return await fetch("/change_entry", {
        body: { 'new_start_date': startDate, 'new_end_date': endDate, 'trip_id': tripId, 'new_trip_id': newTripId },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}