import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

import CancelIcon from '@mui/icons-material/Cancel';

import LoginModalForm from "./LoginModalForm";

import "../../../../styles/Main/Modal/modal.css";

function LoginModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <IconButton className="close-login-modal-button">
                        <CancelIcon className="close-login-modal-icon" />
                    </IconButton>
                    <LoginModalForm />
                </Container>
            </Fade>
        </Modal>
    );
}

export default LoginModal;