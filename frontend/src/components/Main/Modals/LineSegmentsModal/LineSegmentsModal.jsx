import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import "../../../../styles/Main/Modal/modal.css";

function LineSegmentsModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <Typography variant="h4">
                        Line segments modal!
                    </Typography>
                </Container>
            </Fade>
        </Modal>
    );
}

export default LineSegmentsModal;