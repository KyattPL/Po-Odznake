export default async function fetchAddNewEntry(startDate, endDate, tripId) {
    return await fetch("/add_new_entry", {
        body: { 'start_date': startDate, 'end_date': endDate, 'trip_id': tripId },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}