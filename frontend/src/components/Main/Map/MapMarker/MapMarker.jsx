import { useState } from "react";

import { Circle } from '@react-google-maps/api';

import MapInfoWindow from '../MapInfoWindow/MapInfoWindow';

// TODO: po kliknięciu na marker z google maps kiedy InfoWindow jest otwarte następuje zbrickowanie tego infoWindow
function MapMarker({ point, setChosenPoints, position, isChosen }) {

    const [shouldShow, setShouldShow] = useState(false);

    const options = {
        strokeColor: isChosen ? '#0000FF' : '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: isChosen ? '#0000FF' : '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
        radius: 100,
        zIndex: 1
    }

    const showInfoWindow = () => {
        if (!isChosen) {
            setShouldShow(true);
        }
    }

    const closeInfoWindow = () => {
        setShouldShow(false);
    }

    return (
        <>
            <Circle center={position} options={options} onClick={showInfoWindow} />
            {!isChosen ? <MapInfoWindow position={position} shouldShow={shouldShow} closeWindow={closeInfoWindow} point={point}
                setChosenPoints={setChosenPoints} /> : null}
        </>
    );
}

export default MapMarker;