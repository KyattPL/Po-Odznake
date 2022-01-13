import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

import DeleteBookEntry from "./DeleteBookEntry";
import EditBookEntryForm from "./EditBookEntryForm";

// TODO: edit i delete pozostały do podpięcia
function BookEntry({ row }) {

    const [rowState, setRowState] = useState("normal");

    const handleDeleteButton = () => {
        setRowState("delete");
    };

    const handleEditButton = () => {
        setRowState("edit");
    }

    const restoreRowState = () => {
        setRowState("normal");
    }

    return (
        <>
            {rowState === "normal" ?
                <TableRow key={row.entryID}>
                    <TableCell sx={{ width: '150px' }} component="th" scope="row" className="book-modal-table-number-text">
                        {row.entryDate}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {row.startDate}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {row.endDate}
                    </TableCell>
                    <TableCell className="book-modal-table-trip-text">
                        {row.trip}
                    </TableCell>
                    <TableCell className="book-modal-table-number-text" align="right">
                        {row.points}
                    </TableCell>
                    <TableCell>
                        <Button className="book-modal-edit-button" onClick={handleEditButton}>
                            <EditIcon />
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button className="book-modal-delete-button" onClick={handleDeleteButton}>
                            <CancelIcon />
                        </Button>
                    </TableCell>
                </TableRow> : rowState === "delete" ? <DeleteBookEntry closeForm={restoreRowState} />
                    : <EditBookEntryForm closeForm={restoreRowState} />
            }
        </>
    );
}

export default BookEntry;