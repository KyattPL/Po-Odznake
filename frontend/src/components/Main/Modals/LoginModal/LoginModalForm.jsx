import { useState } from "react";

import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import fetchLogin from "../../../../utils/fetchLogin";

import "../../../../styles/Main/Modal/login_modal.css";

function LoginModalForm({ setIsLoggedIn, closeModal }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleLoginChange = (event) => {
        setLogin(event.currentTarget.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.currentTarget.value);
    };

    const handleLogin = async () => {
        const resp = await fetchLogin(login, password);

        if (resp != null) {
            if (resp['auth_status']) {
                setIsLoggedIn(true);
                closeModal();
            } else {
                setIsError(true);
                setErrorMsg("Niepoprawny login lub hasło!");
            }
        } else {
            setIsError(true);
            setErrorMsg("Wystąpił nieoczekiwany błąd na serwerze!");
        }
    }

    const errMsg = isError === true ? <Typography variant="h5"
        className="input-box login-error-msg">{errorMsg}</Typography> : null;

    return (
        <Stack spacing={5} className="login-form-container">
            <Typography variant="h4" className="login-message">
                Zaloguj się na swoje konto
            </Typography>
            <TextField required id="username-input" className="input-box"
                variant="outlined" placeholder="Nazwa użytkownika" error={isError}
                value={login} onChange={handleLoginChange} />
            <TextField required id="password-input" variant="outlined" className="input-box"
                placeholder="Hasło" type="password" error={isError}
                value={password} onChange={handlePasswordChange} />
            {errMsg}
            <Button variant="contained" className="input-box login-form-button" onClick={handleLogin}>
                Zaloguj
            </Button>
            <Typography className="input-box">
                Jesteś tu po raz pierwszy? <Link href="#">Zarejestruj się</Link>
            </Typography>
        </Stack>
    );
}

export default LoginModalForm;