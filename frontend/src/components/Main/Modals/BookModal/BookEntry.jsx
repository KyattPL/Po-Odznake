import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

function BookEntry({ row }) {
    return (
        <TableRow key={row.tripID}>
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
                <Button className="book-modal-edit-button">
                    <EditIcon />
                </Button>
            </TableCell>
            <TableCell>
                <Button className="book-modal-delete-button">
                    <CancelIcon />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default BookEntry;