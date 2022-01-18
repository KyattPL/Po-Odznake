import { useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import SegmentSavedToast from "../SegmentSavedToast/SegmentSavedToast";

import calcDistance from "../../../../utils/calcDistance";
import fetchAddNewSegment from "../../../../utils/fetchAddNewSegment";

import "../../../../styles/Main/Planner/save_route_modal.css";

function SaveSegmentModal({ shouldShow, closeModal, pointA, pointB }) {

    const [description, setDescription] = useState("");
    const [isToastOpen, setIsToastOpen] = useState(false);

    const handleSaveRoute = () => {
        fetchAddNewSegment(description, calcDistance(pointA, pointB), pointA['id'], pointB['id']).then(() => {
            closeModal();
            setIsToastOpen(true);
        }).catch(err => console.error(err));
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
                            Wprowadź opis odcinka
                        </Typography>
                        <TextField multiline value={description} onChange={(event) => setDescription(event.target.value)}
                            sx={{ width: '100%' }} label="Opis" />
                        <Button variant="contained" className="save-route-confirm" onClick={handleSaveRoute}>
                            Zapisz
                        </Button>
                        <Button variant="contained" onClick={closeModal} className="save-route-cancel">
                            Anuluj
                        </Button>
                    </Container>
                </Fade>
            </Modal>
            <SegmentSavedToast isOpen={isToastOpen} closeToast={handleCloseToast} />
        </>
    );
}

export default SaveSegmentModal;