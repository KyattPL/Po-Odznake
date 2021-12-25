import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import HeaderRegular from "./HeaderSmall/HeaderSmall";
import HeaderSmall from "./HeaderRegular/HeaderRegular";
import HeaderUserProfile from "./HeaderUserProfile/HeaderUserProfile";

import "../../styles/Header/header.css";

// Trzeba będzie rozwalić na pliki te boxy wszystkie najlepiej bo zaraz niezłe zagnieżdżenia będą
// Trzeba ogarnąć jak zrobić te opcje przy profilu (do którego boxa wciepać albo jak zrobić flexa odwróconego)
// Nwm jak zrobić te paseczki sexy między opcjami (takie co nie sięgają od góry do dołu tylko tak trochu pomiędzy)

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