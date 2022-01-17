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
import TextField from "@mui/material/TextField";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from '@mui/icons-material/Done';

import fetchAddNewEntry from "../../../../utils/fetchAddNewEntry";
import fetchGetTrips from "../../../../utils/fetchGetTrips";

import "../../../../styles/Main/Modal/add_book_entry.css";

function AddBookEntryForm({ setIsFormOpen, updateEntries }) {

    const [trips, setTrips] = useState([]);

    const [beginDate, setBeginDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedTrip, setSelectedTrip] = useState('');

    useEffect(() => {
        fetchGetTrips().then(res => {
            console.log(res);
            setTrips(res);
        }).catch(err => console.error(err));
    }, []);

    const selectTrip = (event) => {
        setSelectedTrip(event.target.value);
    };

    const addBookEntry = () => {
        fetchAddNewEntry(beginDate, endDate, selectedTrip).then(res => {
            updateEntries(res);
        }).then(() => setIsFormOpen(false)).catch(err => console.error(err));
    };

    return (
        <>
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
                    <Select value={selectedTrip} onChange={selectTrip} label="Wycieczka"
                        MenuProps={{ PaperProps: { style: { maxHeight: '150px' } } }}>
                        {trips != null ? trips.map(trip =>
                            <MenuItem key={trip['id']} value={trip['id']} style={{ whiteSpace: 'normal', width: '100%' }}>
                                {trip['starting_point']['name'] + " -> " + trip['ending_point']['name']}
                            </MenuItem>
                        ) : <MenuItem>CANT LOAD TRIPS</MenuItem>}
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell align="center">
                <Button className="confirm-entry-button" onClick={addBookEntry}>
                    <DoneIcon />
                </Button>
            </TableCell>
            <TableCell align="center">
                <Button className="cancel-entry-button" onClick={() => setIsFormOpen(false)}>
                    <CancelIcon />
                </Button>
            </TableCell>
        </>
    );
}

export default AddBookEntryForm;