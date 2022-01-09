import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import "../../../../styles/Main/Modal/modal.css";
import "../../../../styles/Main/Modal/logout_modal.css";

function LogoutModal({ shouldShow, closeModal }) {

    const handleCloseModalButton = () => {
        return null;
    }

    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <IconButton className="close-modal-button" onClick={handleCloseModalButton}>
                        <CancelIcon className="close-modal-icon" />
                    </IconButton>
                    <Typography variant="h2">
                        Czy chcesz się wylogować?
                    </Typography>
                    <Button>
                        Tak
                    </Button>
                    <Button>
                        Nie
                    </Button>
                </Container>
            </Fade>
        </Modal>
    );
}

export default LogoutModal;