import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import PersonIcon from '@mui/icons-material/Person';

function HeaderUserProfile() {
    return (
        <Box sx={{ flexGrow: 0 }} className="header-profile-box">
            <Tooltip title="Your profile" className="header-profile-box">
                <Button className="header-button">
                    <PersonIcon className="header-icon-button" />
                </Button>
            </Tooltip>
        </Box>
    );
}

export default HeaderUserProfile;