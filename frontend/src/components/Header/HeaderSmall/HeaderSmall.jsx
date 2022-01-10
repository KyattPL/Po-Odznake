import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';

const menuItems = ["Odcinki", "Trasy", "Wycieczki", "Książeczka", "Odznaki"];

function HeaderSmall({ displayModal }) {

    const [anchorMenu, setAnchorMenu] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorMenu(event.currentTarget);
    };

    const handleCloseMenu = (event) => {
        const menuItemId = event.currentTarget.id;
        setAnchorMenu(null);
        // Only certain buttons are working
        if (menuItemId === "head-menu-opt-0" || menuItemId === "head-menu-opt-3") {
            displayModal(menuItemId);
        }
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }} className="header-button-box">
                <Button className="header-button" onClick={handleOpenMenu}>
                    <MenuIcon className="header-icon-button" />
                </Button>
                <Menu id="header-menu" anchorEl={anchorMenu} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorMenu)} onClose={handleCloseMenu} sx={{ display: { xs: 'block', lg: 'none' } }}
                    className="header-menu">
                    {menuItems.map((item, index) => (
                        <MenuItem key={item} onClick={handleCloseMenu} id={"head-menu-opt-" + index}>
                            <Typography align="center" className="header-menu-text">{item}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'flex', lg: 'none' } }} className="header-logo-box">
                <img src="/static/logo_jaspyn_tekst.png" alt="Logo of the website" />
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', lg: 'none' } }} className="header-button-box">
                <Button className="header-button header-button-right">
                    <TranslateIcon className="header-icon-button" />
                </Button>
                <Button className="header-button header-button-right">
                    <SettingsIcon className="header-icon-button" />
                </Button>
            </Box>
        </>
    );
}

export default HeaderSmall;