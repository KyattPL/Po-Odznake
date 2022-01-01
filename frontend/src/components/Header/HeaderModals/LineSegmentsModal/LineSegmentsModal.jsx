import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

function LineSegmentsModal({shouldShow, closeModal}) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Box>
                <Typography variant="h4">
                    Line segments modal!
                </Typography>
            </Box>
        </Modal>
    );
}

export default LineSegmentsModal;