import { useState } from 'react';

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

import fetchDeleteSegment from "../../../../utils/fetchDeleteSegment";

import "../../../../styles/Main/Modal/delete_line_segment.css";

function DeleteLineSegment({ closeForm, pointA, pointB, updateSegments }) {

    const [errMsg, setErrMsg] = useState("");

    const deleteSegment = () => {
        fetchDeleteSegment(pointA, pointB).then(res => {
            if (res.hasOwnProperty('message')) {
                setErrMsg(res['message']);
            } else {
                setErrMsg("");
                updateSegments(res);
                closeForm();
            }
        }).catch(err => console.error(err));
    };

    return (
        <TableRow>
            <TableCell colSpan={7} align="center">
                <Typography display="inline" variant="h6">
                    Czy na pewno chcesz usunąć ten odcinek?
                </Typography>
                <Button variant="contained" className="confirm-delete-ls-button" onClick={deleteSegment}>
                    <DoneIcon />
                </Button>
                <Button variant="contained" className="cancel-delete-ls-button" onClick={closeForm}>
                    <CancelIcon />
                </Button>
                <Typography color="red" variant="h6">{errMsg}</Typography>
            </TableCell>
        </TableRow>
    );
}

export default DeleteLineSegment;