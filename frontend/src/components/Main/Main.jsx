import Grid from "@mui/material/Grid";

import Map from "./Map/Map";
import Planner from "./Planner/Planner";

import "../../styles/Main/main.css";

// TODO: sprawdzać czy jest się zalogowanym przy reload'owaniu stronki
// jest ścieżka /curr_identity do brania tokena
function Main({ isLoggedIn }) {
    return (
        <Grid item xs={12}>
            <Grid container className="main-container">
                <Planner points={['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6']} isLoggedIn={isLoggedIn} />
                <Map />
            </Grid>
        </Grid>
    );
}

export default Main;