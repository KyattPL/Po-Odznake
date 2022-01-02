import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import HeaderRegular from "./HeaderSmall/HeaderSmall";
import HeaderSmall from "./HeaderRegular/HeaderRegular";
import HeaderUserProfile from "./HeaderUserProfile/HeaderUserProfile";
import HeaderModals from "./HeaderModals/HeaderModals";

import "../../styles/Header/header.css";

function Header() {

    const [modalToShow, setModalToShow] = useState(null);
    const [shouldShowmodal, setShouldShowModal] = useState(false);

    const displayModal = (menuItemId) => {
        setShouldShowModal(!shouldShowmodal);
        setModalToShow(menuItemId);
    };

    return (
        <Grid item xs={12}>
            <AppBar position="static" className="header-appbar">
                <Toolbar disableGutters className="header-toolbar">
                    <HeaderSmall displayModal={displayModal}/>
                    <HeaderRegular displayModal={displayModal}/>
                    <HeaderUserProfile displayModal={displayModal}/>
                </Toolbar>
            </AppBar>
            <HeaderModals modalToShow={modalToShow} shouldShow={shouldShowmodal} displayModal={displayModal}/>
        </Grid>
    );
}

export default Header;