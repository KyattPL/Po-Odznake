import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";

import CancelIcon from "@mui/icons-material/Cancel";

import BookModalEmptyBook from "./BookModalEmptyBook";
import BookModalTable from "./BookModalTable";

import fetchGetUserEntries from "../../../../utils/fetchGetUserEntries";

import "../../../../styles/Main/Modal/modal.css";

function BookModal({ shouldShow, closeModal }) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetchGetUserEntries().then((res) => {
            setEntries(res);
            if (res.length !== 0) {
                setIsEmpty(false);
            } else {
                setIsEmpty(true);
            }
        }).catch(err => console.error(err));
    }, []);

    const updateEntries = (newEntries) => {
        setEntries(newEntries);
        if (newEntries !== null && newEntries.length !== 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

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
                    {isEmpty ? <BookModalEmptyBook updateEntries={updateEntries} /> : <BookModalTable entries={entries} updateEntries={updateEntries} />}
                </Container>
            </Fade>
        </Modal>
    );
}

export default BookModal;