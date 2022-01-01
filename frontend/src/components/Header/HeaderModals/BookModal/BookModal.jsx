import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

function BookModal({shouldShow, closeModal}) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Box>
                <Typography variant="h5">
                    Book modal
                </Typography>
            </Box>
        </Modal>
    );
}

export default BookModal;