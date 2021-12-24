import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import "../../styles/Header/header.css";
import Box from "@mui/material/Box";

// Trzeba będzie rozwalić na pliki te boxy wszystkie najlepiej bo zaraz niezłe zagnieżdżenia będą
// Trzeba ogarnąć jak zrobić te opcje przy profilu (do którego boxa wciepać albo jak zrobić flexa odwróconego)
// Nwm jak zrobić te paseczki sexy między opcjami (takie co nie sięgają od góry do dołu tylko tak trochu pomiędzy)

function Header() {
    return (
        <Grid item xs={12}>
            <AppBar position="static" className="header-appbar">
                <Toolbar disableGutters className="header-toolbar">
                    <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} className="header-logo-box">
                        <img src="logo_jaspyn_tekst.png" alt="Logo of the website" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* tutaj jest dla za małego ekraniku */}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <img src="logo_jaspyn_tekst.png" alt="Logo of the website" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* tutaj są opcje dla większego ekranku */}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {/* tutaj będzie logo */}
                    </Box>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Header;