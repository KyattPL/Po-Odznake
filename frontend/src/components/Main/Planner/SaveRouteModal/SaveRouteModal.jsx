import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import "../../../../styles/Main/Planner/save_route_modal.css";

function SaveRouteModal({ shouldShow, closeModal }) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Fade in={shouldShow}>
                <Container className="save-route-modal-box">
                    <div>wtf</div>
                    {/* TODO: zrobić SaveRouteModal i RouteSavedToast */}
                </Container>
            </Fade>
        </Modal>
    );
}

export default SaveRouteModal;