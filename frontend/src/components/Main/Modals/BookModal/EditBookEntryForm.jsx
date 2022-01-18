import { useEffect, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import plLocale from "date-fns/locale/pl";

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

import fetchChangeEntry from "../../../../utils/fetchChangeEntry";
import fetchGetTrips from "../../../../utils/fetchGetTrips";

import "../../../../styles/Main/Modal/edit_book_entry.css";

function EditBookEntryForm({ closeForm, tripId, updateEntries }) {

    const [trips, setTrips] = useState([]);

    const [beginDate, setBeginDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedTrip, setSelectedTrip] = useState('');

    useEffect(() => {
        let isSubscribed = true;

        fetchGetTrips().then(res => isSubscribed ? setTrips(res) : null)
            .then(() => isSubscribed ? setSelectedTrip(tripId) : null)
            .catch(err => console.error(err));

        return () => (isSubscribed = false);
    }, [tripId]);

    const selectTrip = (event) => {
        setSelectedTrip(event.target.value);
    };

    const handleEntryUpdate = () => {
        fetchChangeEntry(beginDate, endDate, tripId, selectedTrip).then(res => {
            updateEntries(res);
        }).then(() => closeForm()).catch(err => console.error(err));
    };

    return (
        <TableRow>
            <TableCell align="center">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                    <DatePicker value={beginDate} onChange={(val) => setBeginDate(val)} mask="__.__.____"
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data rozpoczęcia" />} />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="center">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                    <DatePicker value={endDate} onChange={(val) => setEndDate(val)} mask="__.__.____"
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data zakończenia" />} />
                </LocalizationProvider>
            </TableCell>
            <TableCell colSpan={3}>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Wycieczka</InputLabel>
                    <Select value={selectedTrip} onChange={selectTrip} label="Wycieczka">
                        {trips != null ? trips.map(trip =>
                            <MenuItem key={trip['id']} value={trip['id']}>
                                {trip['starting_point']['name'] + " -> " + trip['ending_point']['name']}
                            </MenuItem>
                        ) : <MenuItem>CANT LOAD TRIPS</MenuItem>}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell align="center">
                <Button variant="contained" className="confirm-edit-be-button" onClick={handleEntryUpdate}>
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

export default EditBookEntryForm;