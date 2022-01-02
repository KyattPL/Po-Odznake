import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "../../../styles/Main/Map/map.css";

function Map() {
    return (
        <Grid item xs={6} sm={8} md={9} xl={10}>
            <Box className="map-container">
                <LoadScript googleMapsApiKey="AIzaSyC1pd6MG7vR8Y3TLc2hM01HqUxpoA8Zkko">
                    <GoogleMap>

                    </GoogleMap>
                </LoadScript>
            </Box>
        </Grid>
    );
}

export default Map;