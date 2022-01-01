import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

function LoginModal({shouldShow, closeModal}) {
    return (
        <Modal open={shouldShow} onClose={closeModal}>
            <Box>
                <Typography variant="h4">
                    Login works!
                </Typography>
            </Box>
        </Modal>
    );
}

export default LoginModal;