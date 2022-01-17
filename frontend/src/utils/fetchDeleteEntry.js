export default async function fetchDeleteEntry(tripId) {

    console.log(tripId);

    return await fetch("/delete_entry", {
        body: JSON.stringify({ 'trip_id': tripId }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}