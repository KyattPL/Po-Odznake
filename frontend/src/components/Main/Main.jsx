import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";

import Map from "./Map/Map";
import Planner from "./Planner/Planner";

import fetchGetPoints from "../../utils/fetchGetPoints";

import "../../styles/Main/main.css";

function Main({ isLoggedIn }) {

    const [points, setPoints] = useState([]);
    const [chosenPoints, setChosenPoints] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        let isRetrieved = false;
        
        const retrievePoints = () => {
            fetchGetPoints().then(res => isSubscribed ? {
                setPoints(res);
                isRetrieved = true;
            } : null).catch(() => console.error("NIE UDAŁO SIĘ WCZYTAĆ LISTY PUNKTÓW"));
        };

        setTimeout();

        return () => (isSubscribed = false);
    }, []);

    return (
        <Grid item xs={12}>
            <Grid container className="main-container">
                <Planner points={chosenPoints} setPoints={setChosenPoints} isLoggedIn={isLoggedIn} />
                <Map points={points} chosenPoints={chosenPoints} setChosenPoints={setChosenPoints} />
            </Grid>
        </Grid>
    );
}

export default Main;