import { useState } from "react";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

import AddBookEntryForm from "./AddBookEntryForm";

import "../../../../styles/Main/Modal/add_book_entry.css";

function AddBookEntry() {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenEntryForm = () => {
        setIsFormOpen(true);
    };

    return (
        <>
            {isFormOpen ?
                <AddBookEntryForm setIsFormOpen={setIsFormOpen} />
                : <TableCell align="center" colSpan={7}>
                    <Button variant="contained" className="add-entry-button" onClick={handleOpenEntryForm}>
                        Dodaj wpis
                    </Button>
                </TableCell>}
        </>
    );
}

export default AddBookEntry;