import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import PersonIcon from '@mui/icons-material/Person';

function HeaderUserProfile({ displayModal, isLoggedIn }) {

    const showLoginModal = () => {
        displayModal("head-menu-opt-login");
    };

    const showLogoutModal = () => {
        displayModal("head-menu-opt-logout");
    }

    return (
        <Box sx={{ flexGrow: 0 }} className="header-profile-box">
            {isLoggedIn ?
                <Tooltip title="Mój profil" className="header-profile-box">
                    <Button className="header-button" onClick={showLogoutModal}>
                        <PersonIcon className="header-icon-button" />
                    </Button>
                </Tooltip>
                :
                <Button className="header-button header-button-box" onClick={showLoginModal}>
                    <Typography variant="h6" data-testid="loginButton">
                        Zaloguj się
                    </Typography>
                </Button>
            }
        </Box>
    );
}

export default HeaderUserProfile;