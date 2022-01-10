import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import '../../../../styles/Main/Modal/book_modal_footer.css';

function BookModalTableActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    const pageStr = (page + 1) + ' / ' + Math.ceil(count / rowsPerPage);

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5, right: '50%', flexDirection: 'column' }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                sx={{ order: 1 }}
            >
                {theme.direction === 'rtl' ? <LastPageIcon className="table-footer-icon" /> : <FirstPageIcon className="table-footer-icon" />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                sx={{ order: 2 }}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight className="table-footer-icon" /> : <KeyboardArrowLeft className="table-footer-icon" />}
            </IconButton>
            <Box sx={{ order: 3, display: 'inline', height: '100%' }}>
                <span className="table-footer-text">
                    {pageStr}
                </span>
            </Box>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                sx={{ order: 4 }}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft className="table-footer-icon" /> : <KeyboardArrowRight className="table-footer-icon" />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
                sx={{ order: 5 }}
            >
                {theme.direction === 'rtl' ? <FirstPageIcon className="table-footer-icon" /> : <LastPageIcon className="table-footer-icon" />}
            </IconButton>
        </Box>
    );
}

BookModalTableActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
};

export default BookModalTableActions;