import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function SegmentSavedToast({ isOpen, closeToast }) {
    return (
        <Snackbar open={isOpen} autoHideDuration={5000} onClose={closeToast}>
            <Alert onClose={closeToast} severity="success" variant="filled">
                Zapisano odcinek
            </Alert>
        </Snackbar>
    );
}

export default SegmentSavedToast;