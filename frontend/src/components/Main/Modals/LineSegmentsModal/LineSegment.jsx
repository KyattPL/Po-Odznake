import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

import DeleteLineSegment from "./DeleteLineSegment";
import EditLineSegment from "./EditLineSegment";

function LineSegment({ segment, updateSegments }) {
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
                <TableRow key={segment['id']}>
                    <TableCell sx={{ width: '150px' }} component="th" scope="row" className="book-modal-table-number-text">
                        {segment['starting_point']['name']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {segment['ending_point']['name']}
                    </TableCell>
                    <TableCell align="left" className="book-modal-table-number-text">
                        {segment['description']}
                    </TableCell>
                    <TableCell className="book-modal-table-trip-text">
                        {segment['points']}
                    </TableCell>
                    <TableCell className="book-modal-table-number-text" align="right">
                        {segment['distance']} m
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
                </TableRow> : rowState === "delete" ? <DeleteLineSegment closeForm={restoreRowState} 
                        pointA={segment['starting_point']['id']} pointB={segment['ending_point']['id']} updateSegments={updateSegments}/>
                    : <EditLineSegment closeForm={restoreRowState} updateSegments={updateSegments}
                        pointA={segment['starting_point']['name']} pointB={segment['ending_point']['name']} distance={segment['distance']}/>
            }
        </>
    );
}

export default LineSegment;