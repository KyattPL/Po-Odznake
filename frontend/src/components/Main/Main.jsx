import Grid from "@mui/material/Grid";

import Map from "./Map/Map";
import Planner from "./Planner/Planner";

import "../../styles/Main/main.css";

function Main() {
    return (
        <Grid item xs={12}>
            <Grid container className="main-container">
                <Planner points={['test1', 'test2', 'test3', 'test4', 'test5', 'test6']}/>
                <Map />
            </Grid>
        </Grid>
    );
}

export default Main;