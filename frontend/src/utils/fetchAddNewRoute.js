export default async function fetchAddNewRoute(points) {

    console.log(points);

    return await fetch("/add_new_route", {
        body: JSON.stringify(points),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}