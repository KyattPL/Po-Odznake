export default async function fetchGetPointsDict() {
    return await fetch("/get_points_dict", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}