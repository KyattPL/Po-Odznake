import { memo } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "../../../styles/Main/Map/map.css";

const center = {
    lat: 50.7622801,
    lng: 15.7392952,
};

// TODO: finalne wyzwanie, ogarnąć wszystko z mapą
function Map() {
    return (
        <Grid item xs={6} sm={8} md={9} xl={10}>
            <Box className="map-container">
                {/* "AIzaSyCkgdzygd0uCHq2ZlcefnSQ3zlND-rOAbk" */}
                <LoadScript googleMapsApiKey={null}>
                    <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={center} zoom={10} options={{ mapTypeControl: false }}>

                    </GoogleMap>
                </LoadScript>
            </Box>
        </Grid>
    );
}

export default memo(Map);