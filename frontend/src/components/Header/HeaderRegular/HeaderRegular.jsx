import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import BookIcon from '@mui/icons-material/Book';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SettingsIcon from '@mui/icons-material/Settings';
import TranslateIcon from '@mui/icons-material/Translate';

function HeaderRegular() {

    const menuItems = ["Odcinki", "Trasy", "Wycieczki"];

    return (
        <>
            <Box sx={{ mr: 2, display: { xs: 'none', lg: 'flex' } }} className="header-logo-box">
                <img src="logo_jaspyn_tekst.png" alt="Logo of the website" />
            </Box>
            <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: { xs: 'none', lg: 'flex' } }} className="header-button-box">
                <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} className="header-button-box">

                    {menuItems.map((item) => (
                        <Button key={item} className="header-button header-button-left">
                            {item}
                        </Button>
                    ))}
                    <Button className="header-button header-button-left">
                        <BookIcon className="header-icon-button" />
                    </Button>
                    <Button className="header-button header-button-left">
                        <MilitaryTechIcon className="header-icon-button" />
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', lg: 'flex' } }} className="header-button-box">
                    <Button className="header-button header-button-right">
                        <TranslateIcon className="header-icon-button" />
                    </Button>
                    <Button className="header-button header-button-right">
                        <SettingsIcon className="header-icon-button" />
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default HeaderRegular;