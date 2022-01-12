import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SaveRouteModal from "../SaveRouteModal/SaveRouteModal";

function PlannerSummary({ points, distance, altitude, isLoggedIn }) {

    const [showSaveModal, setShowSaveModal] = useState(false);

    const openModal = () => {
        setShowSaveModal(true);
    }

    const closeModal = () => {
        setShowSaveModal(false);
    };

    return (
        <Box className="planner-summary-box">
            {isLoggedIn ?
                <>
                    <Button variant="contained" className="planner-summary-button" onClick={openModal}>
                        Zapisz trasę
                    </Button>
                    <SaveRouteModal shouldShow={showSaveModal} closeModal={closeModal} />
                </>
                : null
            }
            <Typography variant="h6" align="center">Suma punktów za trasę: {points}</Typography>
            <Typography variant="h6" align="center">Odległość trasy: {distance}km</Typography>
            <Typography variant="h6" align="center">Różnica wysokości: {altitude}m</Typography>
        </Box >
    );
}

export default PlannerSummary;