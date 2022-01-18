import { useEffect, useState } from "react";

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

import fetchEditSegment from "../../../../utils/fetchEditSegment";
import fetchGetUserSegments from "../../../../utils/fetchGetUserSegments";

function EditLineSegment({ closeForm, updateSegments, pointA, pointB, distance }) {

    const [points, setPoints] = useState([]);

    const [description, setDescription] = useState(null);
    const [firstPoint, setFirstPoint] = useState(pointA);
    const [secondPoint, setSecondPoint] = useState(pointB);

    useEffect(() => {
        let isSubscribed = true;

        fetchGetUserSegments().then(res => isSubscribed ? setPoints(res) : null)
            .catch(err => console.error(err));

        return () => (isSubscribed = false);
    }, []);

    const selectPointA = (event) => {
        setFirstPoint(event.target.value);
    };

    const selectPointB = (event) => {
        setSecondPoint(event.target.value);
    }

    // TODO: liczyć nowy dystans trzeba
    const handleSegmentUpdate = () => {
        fetchEditSegment(pointA, pointB, description, "TODO", firstPoint, secondPoint)
            .then(res => updateSegments(res)).then(() => closeForm())
            .catch(err => console.error(err));
    };

    return (
        <TableRow>
            <TableCell>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Pierwszy punkt</InputLabel>
                    <Select value={firstPoint} onChange={selectPointA} label="Pierwszy punkt">
                        {points !== null ? points.map(point =>
                            <MenuItem key={point['id']} value={point['id']}>
                                {point['name']}
                            </MenuItem>
                        ) : <MenuItem>CANT LOAD POINTS</MenuItem>}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Drugi punkt</InputLabel>
                    <Select value={secondPoint} onChange={selectPointB} label="Drugi punkt">
                        {points !== null ? points.map(point =>
                            <MenuItem key={point['id']} value={point['id']}>
                                {point['name']}
                            </MenuItem>
                        ) : <MenuItem>CANT LOAD POINTS</MenuItem>}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell align="center" colSpan={3}>
                <TextField multiline value={description} onChange={(event) => setDescription(event.target.value)}
                    sx={{ width: '100%' }} label="Opis" />
            </TableCell>
            <TableCell align="center">
                <Button variant="contained" className="confirm-edit-be-button" onClick={handleSegmentUpdate}>
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