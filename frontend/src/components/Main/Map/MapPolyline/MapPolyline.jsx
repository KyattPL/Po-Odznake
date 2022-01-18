import { Polyline } from "@react-google-maps/api";

function MapPolyline({ path }) {

    const options = {
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
    };

    return (
        <Polyline path={path} options={options} />
    );
}

export default MapPolyline;