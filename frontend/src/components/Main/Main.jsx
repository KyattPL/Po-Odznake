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

        fetchGetPoints().then(res => isSubscribed ? setPoints(res) : null)
            .catch(err => console.error(err));

        return () => (isSubscribed = false);
    }, []);

    console.log(points);

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