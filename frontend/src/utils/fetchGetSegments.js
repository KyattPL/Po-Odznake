export default async function fetchGetSegments() {
    return await fetch("/get_segments", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return err;
    });
}