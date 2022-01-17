export default async function fetchDeleteEntry(tripId) {
    return await fetch("/change_entry", {
        body: { 'trip_id': tripId },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}