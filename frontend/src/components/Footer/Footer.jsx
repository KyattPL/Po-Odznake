import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "../../styles/Footer/footer.css";

function Footer() {
    return (
        <Grid item xs={12}>
            <AppBar position="static" className="footer-appbar">
                <Toolbar disableGutters className="footer-toolbar">
                    <Grid container>
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography align="center" variant="h4" className="footer-text">
                                        Kontakt
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography align="center" variant="h4" className="footer-text">
                                        Regulamin
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" className="footer-text">
                                        Copyright &copy; Jaspyn
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Footer;