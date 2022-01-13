import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

import DeleteLineSegment from "./DeleteLineSegment";
import EditLineSegment from "./EditLineSegment";

function LineSegment({ row }) {
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
                <TableRow key={row.segmentID}>
                    <TableCell sx={{ width: '150px' }} component="th" scope="row" className="book-modal-table-number-text">
                        {row.firstPoint}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {row.secondPoint}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {row.description}
                    </TableCell>
                    <TableCell className="book-modal-table-trip-text">
                        {row.points}
                    </TableCell>
                    <TableCell className="book-modal-table-number-text" align="right">
                        {row.distance} m
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
                </TableRow> : rowState === "delete" ? <DeleteLineSegment closeForm={restoreRowState} />
                    : <EditLineSegment closeForm={restoreRowState} />
            }
        </>
    );
}

export default LineSegment;