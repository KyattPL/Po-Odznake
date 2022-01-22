import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import LineSegmentsEmpty from "./LineSegmentsEmpty";
import LineSegmentsTable from "./LineSegmentsTable";

import fetchGetUserSegments from "../../../../utils/fetchGetUserSegments";

import "../../../../styles/Main/Modal/modal.css";

function LineSegmentsModal({ shouldShow, closeModal }) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [segments, setSegments] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {

        let isSubscribed = true;

        const retrieveUserSegments = () => {
            fetchGetUserSegments().then(res => {
                if (isSubscribed) {
                    if (res.hasOwnProperty('message')) {
                        setErrMsg(res['message']);
                    } else {
                        setSegments(res);
                        clearInterval(retrieveTimer);
                        setErrMsg("");
                        if (res.length !== 0) {
                            setIsEmpty(false);
                        } else {
                            setIsEmpty(true);
                        }
                    }
                }
            }).catch(err => console.error(err));
        };

        let retrieveTimer = setInterval(retrieveUserSegments, 15000);
        retrieveUserSegments();
        return () => { isSubscribed = false; clearInterval(retrieveTimer) };
    }, [shouldShow]);

    const updateSegments = (newSegments) => {
        setSegments(newSegments);
        if (newSegments !== null && newSegments.length !== 0) {
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
                    <Typography color="red" variant="h6">{errMsg}</Typography>
                    {isEmpty ? <LineSegmentsEmpty /> : <LineSegmentsTable segments={segments} updateSegments={updateSegments} />}
                </Container>
            </Fade>
        </Modal>
    );
}

export default LineSegmentsModal;