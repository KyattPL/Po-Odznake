import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import PlannerItem from "./PlannerItem/PlannerItem";
import PlannerSummary from "./PlannerSummary/PlannerSummary";

import SaveRouteModal from "./SaveRouteModal/SaveRouteModal";
import SaveSegmentModal from "./SaveSegmentModal/SaveSegmentModal";

import calcRouteData from "../../../utils/calcRouteData";

import "../../../styles/Main/Planner/planner.css";

function Planner({ points, setPoints, isLoggedIn }) {

    const [showSaveRouteModal, setShowSaveRouteModal] = useState(false);
    const [showSaveSegmentModal, setShowSaveSegmentModal] = useState(false);

    const [routeDistance, setRouteDistance] = useState(null);
    const [routeAltitude, setRouteAltitude] = useState(null);
    const [routePoints, setRoutePoints] = useState(null);

    useEffect(() => {
        const [dist, alt, pts] = calcRouteData(points);
        setRouteDistance(dist);
        setRouteAltitude(alt);
        setRoutePoints(pts);
    }, [points]);

    const openRouteModal = () => {
        setShowSaveRouteModal(true);
    }

    const closeRouteModal = () => {
        setShowSaveRouteModal(false);
    };

    const openSegmentModal = () => {
        setShowSaveSegmentModal(true);
    };

    const closeSegmentModal = () => {
        setShowSaveSegmentModal(false);
    };

    return (
        <Grid item xs={6} sm={4} md={3} xl={2} className="planner-grid">
            <Box className="planner-container">
                <Stack direction="column" spacing={2} overflow='auto' sx={{ mt: 2 }}
                    divider={<Divider orientation="horizontal" flexItem />}>
                    {points.map((point, index) => {
                        switch (index) {
                            case 0: return <PlannerItem point={point} setPoints={setPoints} pos="start" index={index} key={point['id']} />;
                            case points.length - 1: return <PlannerItem point={point} setPoints={setPoints} pos="end" index={index} key={point['id']} />;
                            default: return <PlannerItem point={point} setPoints={setPoints} pos="mid" index={index} key={point['id']} />;
                        }
                    })}
                </Stack>
                <Box className="planner-summary-box">
                    {isLoggedIn && Array.isArray(points) && points.length === 2 ?
                        <>
                            <Button variant="contained" className="planner-summary-button" onClick={openSegmentModal} sx={{ display: 'block' }}>
                                Zapisz odcinek
                            </Button>
                            <SaveSegmentModal shouldShow={showSaveSegmentModal} closeModal={closeSegmentModal}
                                pointA={points[0]} pointB={points[1]} />
                        </>
                        : null}
                    {isLoggedIn && Array.isArray(points) && points.length >= 2 ?
                        <>
                            <Button variant="contained" className="planner-summary-button" onClick={openRouteModal}>
                                Zapisz trasę
                            </Button>
                            <SaveRouteModal shouldShow={showSaveRouteModal} closeModal={closeRouteModal} points={points} />
                        </> : null
                    }
                </Box>
                {Array.isArray(points) && points.length > 1 ? <PlannerSummary points={routePoints} distance={routeDistance} altitude={routeAltitude} />
                    : Array.isArray(points) && points.length === 1 ? <Box textAlign="center">Wybierz punkt końcowy</Box>
                        : <Box textAlign="center">Wybierz punkt startowy</Box>}
            </Box>
        </Grid>
    );
}

export default Planner;