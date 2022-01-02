import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import "../../../../styles/Header/header_modal.css";

function LoginModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <Typography variant="h4">
                        Login works!
                    </Typography>
                </Container>
            </Fade>
        </Modal>
    );
}

export default LoginModal;