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

    // TODO: getTripById bo potrzeba 'description' i 'points'do wyświetlenia + id wpisu trzeba
    return (
        <>
            {rowState === "normal" ?
                <TableRow key={entry['trip_id']}>
                    <TableCell sx={{ width: '150px' }} component="th" scope="row" className="book-modal-table-number-text">
                        {entry['entry_date']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {entry['start_date']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {entry['end_date']}
                    </TableCell>
                    <TableCell className="book-modal-table-trip-text">
                        {entry['description']}
                    </TableCell>
                    <TableCell className="book-modal-table-number-text" align="right">
                        {entry['points']}
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
                </TableRow> : rowState === "delete" ? <DeleteBookEntry closeForm={restoreRowState} tripId={entry['trip_id']} updateEntries={updateEntries} />
                    : <EditBookEntryForm closeForm={restoreRowState} tripId={entry['trip_id']} updateEntries={updateEntries} />
            }
        </>
    );
}

export default BookEntry;