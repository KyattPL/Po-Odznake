import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import "../../styles/Footer/footer.css";

function Footer() {
    return (
        <Grid item xs={12}>
            <AppBar position="static">
                <Toolbar disableGutters className="footer-toolbar">
                    <div>beka</div>
                    <div>gerag</div>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Footer;