import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";

import RouteSavedToast from "../RouteSavedToast/RouteSavedToast";

import fetchAddNewRoute from "../../../../utils/fetchAddNewRoute";

import "../../../../styles/Main/Planner/save_route_modal.css";

function SaveRouteModal({ shouldShow, closeModal, points }) {

    const [isToastOpen, setIsToastOpen] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        setErrMsg("");
    }, [shouldShow]);

    const handleSaveRoute = () => {
        fetchAddNewRoute(points).then(res => {
            if (res.hasOwnProperty('message')) {
                setErrMsg(res['message']);
            } else {
                setErrMsg("");
                setIsToastOpen(true);
                closeModal();
            }
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
                            Czy na pewno chcesz zapisać trasę?
                        </Typography>
                        <Button variant="contained" className="save-route-confirm" onClick={handleSaveRoute}>
                            Tak
                        </Button>
                        <Button variant="contained" onClick={closeModal} className="save-route-cancel">
                            Nie
                        </Button>
                        <Typography color="red" variant="h6">{errMsg}</Typography>
                    </Container>
                </Fade>
            </Modal>
            <RouteSavedToast isOpen={isToastOpen} closeToast={handleCloseToast} />
        </>
    );
}

export default SaveRouteModal;