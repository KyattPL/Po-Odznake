import Box from "@mui/material/Box";

function HeaderSmall() {

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                <div>test</div>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }} className="header-logo-box">
                <img src="logo_jaspyn_tekst.png" alt="Logo of the website" />
            </Box>
        </>
    );
}

export default HeaderSmall;