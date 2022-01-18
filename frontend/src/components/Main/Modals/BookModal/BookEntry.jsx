import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

import DeleteBookEntry from "./DeleteBookEntry";
import EditBookEntryForm from "./EditBookEntryForm";

function BookEntry({ entry, updateEntries }) {

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
                <TableRow key={entry['trip']['id']}>
                    <TableCell sx={{ width: '150px' }} className="book-modal-table-number-text">
                        {entry['entry_date']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {entry['start_date']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {entry['end_date']}
                    </TableCell>
                    <TableCell className="book-modal-table-trip-text">
                        {entry['trip']['starting_point']['name'] + " -> " + entry['trip']['ending_point']['name']}
                    </TableCell>
                    <TableCell className="book-modal-table-number-text" align="right">
                        {entry['trip']['points']}
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
                </TableRow> : rowState === "delete" ? <DeleteBookEntry closeForm={restoreRowState} tripId={entry['trip']['id']} updateEntries={updateEntries} />
                    : <EditBookEntryForm closeForm={restoreRowState} tripId={entry['trip']['id']} updateEntries={updateEntries} />
            }
        </>
    );
}

export default BookEntry;