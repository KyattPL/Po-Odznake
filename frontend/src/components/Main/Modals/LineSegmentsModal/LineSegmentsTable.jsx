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

import LineSegment from "./LineSegment";
import ModalTableActions from '../ModalTableActions';

// TODO: poprawić stylizację tabelki i finito
function LineSegmentsTable({ segments, updateSegments }) {
    const [page, setPage] = useState(0);
    const rowsPerPage = 5;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - segments.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <TableContainer component={Box} className="book-modal-table-container">
            <Table sx={{ minWidth: 500 }} stickyHeader aria-label="custom pagination table" className="book-modal-table">
                <TableHead>
                    <TableRow>
                        <TableCell className="book-modal-table-header-text">Pierwszy punkt</TableCell>
                        <TableCell className="book-modal-table-header-text">Drugi punkt</TableCell>
                        <TableCell className="book-modal-table-header-text">Opis</TableCell>
                        <TableCell className="book-modal-table-header-text">Punkty</TableCell>
                        <TableCell className="book-modal-table-header-text">Dystans</TableCell>
                        <TableCell className="book-modal-table-header-text"></TableCell>
                        <TableCell className="book-modal-table-header-text"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {segments === null || !Array.isArray(segments) ? null : (rowsPerPage > 0
                        ? segments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : segments
                    ).map((segment) => (
                        <LineSegment key={segment['id']} segment={segment} updateSegments={updateSegments} />
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
                            count={Array.isArray(segments) ? segments.length : 0}
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

export default LineSegmentsTable;