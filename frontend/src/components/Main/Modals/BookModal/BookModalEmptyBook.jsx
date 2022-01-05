import { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "../../../../styles/Main/Modal/book_modal.css";

function BookModalEmptyBook() {

    const [selectedTrip, setSelectedTrip] = useState();
    const [beginDate, setBeginDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const selectTrip = (event) => {
        setSelectedTrip(event.target.value);
    };

    return (
        <Stack spacing={5} className="empty-book-modal-box">
            <Typography variant="h2" className="empty-book-modal-text">
                Brak wpisów
            </Typography>
            <Box sx={{ height: '40px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker value={beginDate} onChange={(val) => setBeginDate(val)}
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data rozpoczęcia" />} />
                    <DatePicker value={endDate} onChange={(val) => setEndDate(val)}
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data zakończenia" />} />
                </LocalizationProvider>
            </Box>
            <FormControl className="empty-book-trip-list">
                <InputLabel>Wycieczka</InputLabel>
                <Select value={selectedTrip} onChange={selectTrip} label="Wycieczka">
                    <MenuItem className="empty-book-trip-item" value={1}>pierwsza wycieczka</MenuItem>
                    <MenuItem className="empty-book-trip-item" value={2}>druga wycieczka</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" className={'empty-book-add-button'}>
                Dodaj wpis
            </Button>
            <Button variant="contained" className={'empty-book-cancel-button'}>
                Anuluj
            </Button>
        </Stack>
    );
}

export default BookModalEmptyBook;