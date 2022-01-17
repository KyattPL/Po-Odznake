export default async function fetchAddNewRoute(segments) {
    return await fetch("/add_new_route", {
        body: { 'segments': segments },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}