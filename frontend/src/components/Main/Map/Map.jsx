import { memo } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import MapMarker from "./MapMarker/MapMarker";
import MapPolyline from "./MapPolyline/MapPolyline";

import "../../../styles/Main/Map/map.css";

const center = {
    lat: 50.7622801,
    lng: 15.7392952,
};

function Map({ points, chosenPoints, setChosenPoints }) {

    let path = [];
    if (Array.isArray(chosenPoints)) {
        chosenPoints.forEach(point => path.push({ lat: point['latitude'], lng: point['longitude'] }));
    }

    return (
        <Grid item xs={6} sm={8} md={9} xl={10}>
            <Box className="map-container">
                {/* "AIzaSyCkgdzygd0uCHq2ZlcefnSQ3zlND-rOAbk" */}
                <LoadScript googleMapsApiKey={null}>
                    <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={center} zoom={10} options={{ mapTypeControl: false }}>
                        {Array.isArray(points) ? points.map((point) =>
                            <MapMarker key={point['id']} point={point} setChosenPoints={setChosenPoints}
                                position={{ lat: point['latitude'], lng: point['longitude'] }}
                                isChosen={chosenPoints.includes(point)} />) : null}
                        <MapPolyline path={path} />
                    </GoogleMap>
                </LoadScript>
            </Box>
        </Grid>
    );
}

export default memo(Map);