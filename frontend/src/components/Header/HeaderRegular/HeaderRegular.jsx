import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import BookIcon from '@mui/icons-material/Book';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';

function HeaderRegular({ displayModal }) {

    const menuItems = ["Odcinki", "Trasy", "Wycieczki"];

    const menuItemClick = (event) => {
        const menuItemId = event.currentTarget.id;
        // Only certain buttons are working
        if (menuItemId === "head-menu-opt-0" || menuItemId === "head-menu-opt-3") {
            displayModal(menuItemId);
        }
    };

    return (
        <>
            <Box sx={{ mr: 2, display: { xs: 'none', lg: 'flex' } }} className="header-logo-box">
                <img src="/static/logo_jaspyn_tekst.png" alt="Logo of the website" />
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: { xs: 'none', lg: 'flex' } }} className="header-button-box">
                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} className="header-button-box">

                    {menuItems.map((item, index) => (
                        <Button key={item} className="header-button header-button-left" id={"head-menu-opt-" + index} onClick={menuItemClick}>
                            {item}
                        </Button>
                    ))}
                    <Tooltip title="Książeczka">
                        <Button className="header-button header-button-left" id="head-menu-opt-3" onClick={menuItemClick}>
                            <BookIcon className="header-icon-button" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Odznaki">
                        <Button className="header-button header-button-left" id="head-menu-opt-4">
                            <MilitaryTechIcon className="header-icon-button" />
                        </Button>
                    </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', lg: 'flex' } }} className="header-button-box">
                    <Tooltip title="Język">
                        <Button className="header-button header-button-right" id="head-menu-opt-5">
                            <TranslateIcon className="header-icon-button" />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Ustawienia">
                        <Button className="header-button header-button-right" id="head-menu-opt-6">
                            <SettingsIcon className="header-icon-button" />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
        </>
    );
}

export default HeaderRegular;