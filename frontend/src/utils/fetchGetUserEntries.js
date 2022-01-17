export default async function fetchGetUserEntries() {
    return await fetch("/get_user_entries", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err => {
        console.error(err);
        return null;
    });
}