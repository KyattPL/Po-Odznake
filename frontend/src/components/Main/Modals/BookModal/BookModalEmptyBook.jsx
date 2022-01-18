import { useEffect, useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import plLocale from "date-fns/locale/pl";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import fetchAddNewEntry from "../../../../utils/fetchAddNewEntry";
import fetchGetTrips from "../../../../utils/fetchGetTrips";

import "../../../../styles/Main/Modal/empty_book_modal.css";

function BookModalEmptyBook({ updateEntries }) {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [displayClass, setDisplayClass] = useState("invisible-box");

    const [trips, setTrips] = useState([]);

    const [selectedTrip, setSelectedTrip] = useState('');
    const [beginDate, setBeginDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const selectTrip = (event) => {
        setSelectedTrip(event.target.value);
    };

    useEffect(() => {
        let isSubscribed = true;

        fetchGetTrips().then(res => isSubscribed ? setTrips(res) : null)
            .catch(err => console.error(err));

        return () => (isSubscribed = false);
    }, []);

    const handleAddEntry = () => {
        if (isFormVisible) {
            fetchAddNewEntry(beginDate, endDate, selectedTrip).then(res => {
                updateEntries(res);
            }).catch(err => console.error(err));
        } else {
            setIsFormVisible(true);
            setDisplayClass("");
        }
    };

    const handleCancelEntry = () => {
        setIsFormVisible(false);
        setDisplayClass("invisible-box");
    }

    return (
        <Stack spacing={5} className="empty-book-modal-box">
            <Typography variant="h2" className="empty-book-modal-text ">
                Brak wpisów
            </Typography>
            <Box sx={{ height: '40px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }} className={displayClass}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                    <DatePicker value={beginDate} onChange={(val) => setBeginDate(val)} mask="__.__.____"
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data rozpoczęcia" />} />
                    <DatePicker value={endDate} onChange={(val) => setEndDate(val)} mask="__.__.____"
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data zakończenia" />} />
                </LocalizationProvider>
            </Box>
            <FormControl className={"empty-book-trip-list " + displayClass}>
                <InputLabel>Wycieczka</InputLabel>
                <Select value={selectedTrip} onChange={selectTrip} label="Wycieczka"
                    MenuProps={{ PaperProps: { style: { maxHeight: '150px', maxWidth: '1200px', width: '50vw' } } }}>
                    {trips != null && Array.isArray(trips) ? trips.map(trip =>
                        <MenuItem key={trip['id']} className="empty-book-trip-item" value={trip['id']} style={{ whiteSpace: 'normal', width: '100%' }}>
                            {trip['starting_point']['name'] + " -> " + trip['ending_point']['name']}
                        </MenuItem>
                    ) : <MenuItem>CANT LOAD TRIPS</MenuItem>}
                </Select>
            </FormControl>
            <Button variant="contained" className="empty-book-add-button" onClick={handleAddEntry}>
                Dodaj wpis
            </Button>
            <Button variant="contained" className={"empty-book-cancel-button " + displayClass} onClick={handleCancelEntry}>
                Anuluj
            </Button>
        </Stack>
    );
}

export default BookModalEmptyBook;