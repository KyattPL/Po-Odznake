import { useState } from 'react';

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

import fetchDeleteEntry from "../../../../utils/fetchDeleteEntry";

import "../../../../styles/Main/Modal/delete_book_entry.css";

function DeleteBookEntry({ closeForm, tripId, updateEntries }) {

    const [errMsg, setErrMsg] = useState("");

    const deleteEntry = () => {
        fetchDeleteEntry(tripId).then(res => {
            if (res.hasOwnProperty('message')) {
                setErrMsg(res['message']);
            } else {
                setErrMsg("");
                updateEntries(res);
                closeForm();
            }
        }).catch(err => console.error(err));
    };

    return (
        <TableRow>
            <TableCell colSpan={7} align="center">
                <Typography display="inline" variant="h6">
                    Czy na pewno chcesz usunąć ten wpis?
                </Typography>
                <Button variant="contained" className="confirm-delete-be-button" onClick={deleteEntry}>
                    <DoneIcon />
                </Button>
                <Button variant="contained" className="cancel-delete-be-button" onClick={closeForm}>
                    <CancelIcon />
                </Button>
                <Typography color="red" variant="h6">{errMsg}</Typography>
            </TableCell>
        </TableRow>
    );
}

export default DeleteBookEntry;