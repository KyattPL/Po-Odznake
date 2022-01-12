import { useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import RouteSavedToast from "../RouteSavedToast/RouteSavedToast";

import "../../../../styles/Main/Planner/save_route_modal.css";

function SaveRouteModal({ shouldShow, closeModal }) {

    const [isToastOpen, setIsToastOpen] = useState(false);

    const handleSaveRoute = () => {
        closeModal();
        setIsToastOpen(true);
    };

    const handleCloseToast = () => {
        setIsToastOpen(false);
    }

    return (
        <>
            <Modal open={shouldShow} onClose={closeModal}>
                <Fade in={shouldShow}>
                    <Container className="save-route-modal-box">
                        <IconButton className="close-modal-button" onClick={closeModal}>
                            <CancelIcon className="close-modal-icon" />
                        </IconButton>
                        <Typography variant="h2" className="save-route-h2">
                            Czy na pewno chcesz zapisać trasę?
                        </Typography>
                        <Button variant="contained" className="save-route-confirm" onClick={handleSaveRoute}>
                            Tak
                        </Button>
                        <Button variant="contained" onClick={closeModal} className="save-route-cancel">
                            Nie
                        </Button>
                    </Container>
                </Fade>
            </Modal>
            <RouteSavedToast isOpen={isToastOpen} closeToast={handleCloseToast} />
        </>
    );
}

export default SaveRouteModal;