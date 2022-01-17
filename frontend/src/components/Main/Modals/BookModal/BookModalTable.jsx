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
import ModalTableActions from '../ModalTableActions';

import '../../../../styles/Main/Modal/book_modal.css';

function BookModalTable({ entries, updateEntries }) {
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - entries.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    console.log(entries);

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
                            <AddBookEntry updateEntries={updateEntries} />
                        </TableRow> : null}
                    {(rowsPerPage > 0 && entries != null
                        ? entries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : entries
                    ).map((entry) => (
                        <BookEntry entry={entry} updateEntries={updateEntries} />
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
                            count={entries.length}
                            page={page}
                            onPageChange={handleChangePage}
                            ActionsComponent={ModalTableActions}
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