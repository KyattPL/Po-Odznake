import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

import "../../../../styles/Main/Modal/delete_line_segment.css";

function DeleteLineSegment({ closeForm }) {
    return (
        <TableRow>
            <TableCell colSpan={7} align="center">
                <Typography display="inline" variant="h6">
                    Czy na pewno chcesz usunąć ten odcinek?
                </Typography>
                <Button variant="contained" className="confirm-delete-ls-button">
                    <DoneIcon />
                </Button>
                <Button variant="contained" className="cancel-delete-ls-button" onClick={closeForm}>
                    <CancelIcon />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default DeleteLineSegment;