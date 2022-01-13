import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import "../../../../styles/Main/Modal/modal.css";
import "../../../../styles/Main/Modal/logout_modal.css";

function LogoutModal({ shouldShow, closeModal, setIsLoggedIn }) {

    const handleCloseModalButton = () => {
        closeModal();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        closeModal();
    };

    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <IconButton className="close-modal-button" onClick={handleCloseModalButton}>
                        <CancelIcon className="close-modal-icon" />
                    </IconButton>
                    <Typography variant="h2" className="logout-message">
                        Czy chcesz się wylogować?
                    </Typography>
                    <Container className="buttons-container">
                        <Button className="button-box yes-button" onClick={handleLogout}>
                            Tak
                        </Button>
                        <Button className="button-box no-button" onClick={handleCloseModalButton}>
                            Nie
                        </Button>
                    </Container>
                </Container>
            </Fade>
        </Modal>
    );
}

export default LogoutModal;