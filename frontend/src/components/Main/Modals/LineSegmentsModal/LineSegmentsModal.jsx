import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

import CancelIcon from "@mui/icons-material/Cancel";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import LineSegmentsEmpty from "./LineSegmentsEmpty";
import LineSegmentsTable from "./LineSegmentsTable";

import "../../../../styles/Main/Modal/modal.css";

function LineSegmentsModal({ shouldShow, closeModal }) {

    const [isEmpty, setIsEmpty] = useState(true);

    const handleCloseModalButton = () => {
        closeModal();
    };

    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="header-modal-box">
                    <IconButton className="close-modal-button" onClick={handleCloseModalButton}>
                        <CancelIcon className="close-modal-icon" />
                    </IconButton>
                    <IconButton onClick={() => setIsEmpty(!isEmpty)}>
                        <ChangeCircleIcon className="change-modal-icon" />
                    </IconButton>
                    {isEmpty ? <LineSegmentsEmpty /> : <LineSegmentsTable />}
                </Container>
            </Fade>
        </Modal>
    );
}

export default LineSegmentsModal;