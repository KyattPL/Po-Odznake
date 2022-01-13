import { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";

import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from '@mui/icons-material/Done';

import "../../../../styles/Main/Modal/add_book_entry.css";

function AddBookEntryForm({ setIsFormOpen }) {

    const [beginDate, setBeginDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedTrip, setSelectedTrip] = useState(null);

    return (
        <>
            <TableCell align="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker value={beginDate} onChange={(val) => setBeginDate(val)}
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data rozpoczęcia" />} />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker value={endDate} onChange={(val) => setEndDate(val)}
                        renderInput={(params) => <TextField {...params} variant="standard" label="Data zakończenia" />} />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="center" colSpan={3}>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel>Wycieczka</InputLabel>
                    <Select value={selectedTrip} onChange={(event) => setSelectedTrip(event.currentTarget.value)} label="Wycieczka">
                        <MenuItem value={1}>Pierwsza wycieczka</MenuItem>
                        <MenuItem value={2}>Druga wycieczka</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            {/* TODO: yyy no jakoś musi punkty przeliczać system oof */}
            <TableCell align="center">
                <Button className="confirm-entry-button">
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