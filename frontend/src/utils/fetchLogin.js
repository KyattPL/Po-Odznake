export default async function fetchLogin(login, pass) {
    await fetch("/auth", {
        body: JSON.stringify({ username: login, password: pass }),
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text()).then(result => {
        console.log(result);
    })
}