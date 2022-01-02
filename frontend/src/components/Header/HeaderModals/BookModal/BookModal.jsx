import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import "../../../../styles/Header/header_modal.css";

function BookModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <Typography variant="h5">
                        Book modal
                    </Typography>
                </Container>
            </Fade>
        </Modal>
    );
}

export default BookModal;