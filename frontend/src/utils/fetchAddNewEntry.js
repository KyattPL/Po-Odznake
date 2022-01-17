export default async function fetchAddNewEntry(startDate, endDate, tripId) {

    let start = new Date(startDate);
    let startLocal = start.toLocaleString("pl").split(',')[0];

    let end = new Date(endDate);
    let endLocal = end.toLocaleString("pl").split(',')[0];

    return await fetch("/add_new_entry", {
        body: { 'start_date': startLocal, 'end_date': endLocal, 'trip_id': tripId },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}