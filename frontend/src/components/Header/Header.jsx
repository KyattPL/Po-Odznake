import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import HeaderRegular from "./HeaderSmall/HeaderSmall";
import HeaderSmall from "./HeaderRegular/HeaderRegular";
import HeaderUserProfile from "./HeaderUserProfile/HeaderUserProfile";

import "../../styles/Header/header.css";

function Header() {
    return (
        <Grid item xs={12}>
            <AppBar position="static" className="header-appbar">
                <Toolbar disableGutters className="header-toolbar">
                    <HeaderSmall />
                    <HeaderRegular />
                    <HeaderUserProfile />
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default Header;