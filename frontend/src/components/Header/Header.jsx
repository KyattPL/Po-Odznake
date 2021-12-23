import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import "../../styles/Header/header.css";

function Header() {
    return (
        <Grid item xs={12}>
            <AppBar position="static">
                <Toolbar disableGutters className="header-toolbar">
                    <div>logo</div>
                    <div>opcje-dla-zalogowanych</div>
                    <div>opcje-strony</div>
                    <div>ikona-konta</div>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Header;