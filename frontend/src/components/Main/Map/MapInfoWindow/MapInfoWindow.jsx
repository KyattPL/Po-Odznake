import { InfoWindow } from '@react-google-maps/api';

import Button from "@mui/material/Button";

function MapInfoWindow({ position, shouldShow, closeWindow, point, setChosenPoints }) {

    const handleAddPoint = () => {
        setChosenPoints(prev => [...prev, point]);
        closeWindow();
    };

    return (
        <>
            {shouldShow ?
                <InfoWindow position={position} onCloseClick={closeWindow} onUnmount={closeWindow}>
                    <Button variant="contained" color="success" onClick={handleAddPoint}>
                        Dodaj do trasy
                    </Button>
                </InfoWindow > : null
            }
        </>
    );
}

export default MapInfoWindow;