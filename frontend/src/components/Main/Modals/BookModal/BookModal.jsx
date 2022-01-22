import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import BookModalEmptyBook from "./BookModalEmptyBook";
import BookModalTable from "./BookModalTable";

import fetchGetUserEntries from "../../../../utils/fetchGetUserEntries";

import "../../../../styles/Main/Modal/modal.css";

function BookModal({ shouldShow, closeModal }) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [entries, setEntries] = useState([]);

    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        let isSubscribed = true;

        const retrieveUserEntries = () => {
            fetchGetUserEntries().then(isSubscribed ? (res) => {
                if (res.hasOwnProperty('message')) {
                    setErrMsg(res['message']);
                } else {
                    setErrMsg("");
                    setEntries(res);
                    clearInterval(retrieveTimer);
                    if (res.length !== 0) {
                        setIsEmpty(false);
                    } else {
                        setIsEmpty(true);
                    }
                }
            } : null).catch(err => console.error(err));
        };

        let retrieveTimer = setInterval(retrieveUserEntries, 15000);
        retrieveUserEntries();
        return () => { isSubscribed = false; clearInterval(retrieveTimer) };
    }, [shouldShow]);

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
                    <Typography color="red" variant="h6">{errMsg}</Typography>
                </Container>
            </Fade>
        </Modal>
    );
}

export default BookModal;