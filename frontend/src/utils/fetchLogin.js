export default async function fetchLogin(login, pass) {
    return await fetch("/login", {
        body: JSON.stringify({ username: login, password: pass }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(result => {
        return result;
    }).catch(err => {
        console.error(err);
        return null;
    });
}