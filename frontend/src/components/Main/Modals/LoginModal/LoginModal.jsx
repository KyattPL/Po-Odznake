import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "../../../../styles/Header/header_modal.css";

function LoginModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <Typography variant="h4">
                        Zaloguj się na swoje konto
                    </Typography>
                    <TextField required id="username-input" variant="outlined" placeholder="Nazwa użytkownika"/>
                    <TextField required id="password-input" variant="outlined" placeholder="Hasło" type="password" />
                    <Button variant="contained">Zaloguj</Button>
                </Container>
            </Fade>
        </Modal>
    );
}

export default LoginModal;