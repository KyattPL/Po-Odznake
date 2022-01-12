import { useState } from "react";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from "@mui/material/TableHead";
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import AddBookEntry from "./AddBookEntry";
import BookEntry from "./BookEntry";
import BookModalTableActions from './BookModalTableActions';

import '../../../../styles/Main/Modal/book_modal.css';

function createData(tripID, entryDate, startDate, endDate, trip, points) {
    return { tripID, entryDate, startDate, endDate, trip, points };
}

const rows = [
    createData(4, '23.07.2021', '17.07.2021', '20.07.2021', 'Karpacz Górny (Wang) -> Śnieżka', 16),
    createData(3, '20.04.2021', '', '', 'Schronisko PTTK Kochanówka -> Schronisko Pod Łabskim Szczytem', 11),
    createData(2, '10.12.2020', '10.12.2020', '10.12.2020', 'Marciszów -> Raszów', 13),
    createData(1, '23.09.2020', '', '', 'Radków -> Schronisku na Szczelińcu', 12)
].sort((a, b) => (a.tripID < b.tripID ? 1 : -1));

function BookModalTable() {
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // TODO: zaimplementować EDIT i DELETE button

    return (
        <TableContainer component={Box} className="book-modal-table-container">
            <Table sx={{ minWidth: 500 }} stickyHeader aria-label="custom pagination table" className="book-modal-table">
                <TableHead>
                    <TableRow>
                        <TableCell className="book-modal-table-header-text">Data wpisu</TableCell>
                        <TableCell className="book-modal-table-header-text">Data rozpoczęcia</TableCell>
                        <TableCell className="book-modal-table-header-text">Data zakończenia</TableCell>
                        <TableCell className="book-modal-table-header-text">Wycieczka</TableCell>
                        <TableCell className="book-modal-table-header-text">Punkty</TableCell>
                        <TableCell className="book-modal-table-header-text"></TableCell>
                        <TableCell className="book-modal-table-header-text"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {page === 0
                        ? <TableRow>
                            <AddBookEntry />
                        </TableRow> : null}
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        // TODO: użyteczne będzie bardzo tripID po stronie frontendowej
                        <BookEntry row={row} />
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={7} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter className="book-modal-table-footer-box">
                    <TableRow >
                        <TablePagination
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[rowsPerPage]}
                            colSpan={7}
                            count={rows.length}
                            page={page}
                            onPageChange={handleChangePage}
                            ActionsComponent={BookModalTableActions}
                            labelRowsPerPage=""
                            labelDisplayedRows={() => ""}
                            sx={{ flexDirection: 'column' }}
                            id="book-modal-table-footer"
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default BookModalTable;