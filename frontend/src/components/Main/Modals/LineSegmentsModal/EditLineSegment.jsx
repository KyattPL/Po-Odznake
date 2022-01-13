import { useState } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

function EditLineSegment({ closeForm }) {

    const [desription, setDescription] = useState(null);
    const [firstPoint, setFirstPoint] = useState(null);
    const [secondPoint, setSecondPoint] = useState(null);

    return (
        <TableRow>
            <TableCell align="center">
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Pierwszy punkt</InputLabel>
                    <Select value={firstPoint} onChange={(event) => setFirstPoint(event.currentTarget.value)} label="Pierwszy punkt">
                        <MenuItem value={1}>pierwszy punkt</MenuItem>
                        <MenuItem value={2}>drugi punkt</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell align="center">
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Drugi punkt</InputLabel>
                    <Select value={secondPoint} onChange={(event) => setSecondPoint(event.currentTarget.value)} label="Drugi punkt">
                        <MenuItem value={1}>pierwszy punkt</MenuItem>
                        <MenuItem value={2}>drugi punkt</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell align="center" colSpan={3}>
                <TextField multiline value={desription} onChange={(event) => setDescription(event.target.value)}
                    sx={{ width: '100%' }} label="Opis" />
            </TableCell>
            <TableCell align="center">
                <Button variant="contained" className="confirm-edit-be-button">
                    <DoneIcon />
                </Button>
            </TableCell>
            <TableCell align="center">
                <Button variant="contained" className="cancel-edit-be-button" onClick={closeForm}>
                    <CancelIcon />
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default EditLineSegment;