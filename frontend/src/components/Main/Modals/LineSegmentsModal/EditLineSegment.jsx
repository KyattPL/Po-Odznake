import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";

import calcDistance from "../../../../utils/calcDistance";
import fetchEditSegment from "../../../../utils/fetchEditSegment";
import fetchGetPointsDict from "../../../../utils/fetchGetPointsDict";

function EditLineSegment({ closeForm, updateSegments, pointA, pointB }) {

    const [points, setPoints] = useState([]);

    const [description, setDescription] = useState("");
    const [firstPoint, setFirstPoint] = useState(pointA);
    const [secondPoint, setSecondPoint] = useState(pointB);

    const [errMsg, setErrMsg] = useState("");
    const [isErr, setIsErr] = useState(false);

    useEffect(() => {
        let isSubscribed = true;

        const retrievePoints = () => {
            fetchGetPointsDict().then(isSubscribed ? res => {
                if (res.hasOwnProperty('message')) {
                    setErrMsg(res['message']);
                    setIsErr(true);
                } else {
                    setErrMsg("");
                    setIsErr(false);
                    clearInterval(retrieveTimer);
                    setPoints(res);
                    setFirstPoint(pointA);
                    setSecondPoint(pointB);
                }
            } : null).catch(err => console.error(err));
        };

        let retrieveTimer = setInterval(retrievePoints, 15000);
        retrievePoints();
        return () => { isSubscribed = false; clearInterval(retrieveTimer) };
    }, [pointA, pointB]);

    const selectPointA = (event) => {
        setFirstPoint(event.target.value);
    };

    const selectPointB = (event) => {
        setSecondPoint(event.target.value);
    }

    const handleSegmentUpdate = () => {
        fetchEditSegment(pointA, pointB, description, Number.parseInt(calcDistance(points[firstPoint], points[secondPoint])),
            firstPoint, secondPoint)
            .then(res => {
                if (res.hasOwnProperty('message')) {
                    setErrMsg(res['message']);
                    setIsErr(true);
                } else {
                    setErrMsg("");
                    setIsErr(false);
                    updateSegments(res);
                    closeForm();
                }
            }).catch(err => console.error(err));
    };

    return (
        <>
            <TableRow>
                <TableCell>
                    <FormControl sx={{ width: '100%' }} error={isErr}>
                        <InputLabel>Pierwszy punkt</InputLabel>
                        <Select value={firstPoint} onChange={selectPointA} label="Pierwszy punkt"
                            MenuProps={{ PaperProps: { style: { maxHeight: '150px' } } }}>
                            {points !== null ? Object.keys(points).map(point =>
                                <MenuItem key={points[point]['id']} value={points[point]['id']}>
                                    {points[point]['name']}
                                </MenuItem>
                            ) : <MenuItem>CANT LOAD POINTS</MenuItem>}
                        </Select>
                    </FormControl>
                </TableCell>
                <TableCell>
                    <FormControl sx={{ width: '100%' }} error={isErr}>
                        <InputLabel>Drugi punkt</InputLabel>
                        <Select value={secondPoint} onChange={selectPointB} label="Drugi punkt"
                            MenuProps={{ PaperProps: { style: { maxHeight: '150px' } } }}>
                            {points !== null ? Object.keys(points).map(point =>
                                <MenuItem key={points[point]['id']} value={points[point]['id']}>
                                    {points[point]['name']}
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
            {isErr ? <TableRow>
                <TableCell colSpan="7">
                    <Typography color="red" variant="h6">{errMsg}</Typography></TableCell>
            </TableRow> : null}
        </>
    );
}

export default EditLineSegment;