import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import PlannerItem from "./PlannerItem/PlannerItem";

import "../../../styles/Main/Planner/planner.css";

function Planner(props) {
    
    const routePoints = props.points;

    return (
        <Grid item xs={6} sm={4} md={3} xl={2} className="planner-grid">
            <Box className="planner-container">
                <Stack direction="column" spacing={2} overflow='auto' sx={{ mt: 2 }}
                    divider={<Divider orientation="horizontal" flexItem />}>
                    {routePoints.map((point, index) => {
                        switch (index) {
                            case 0: return <PlannerItem point={point} pos="start" />;
                            case routePoints.length - 1: return <PlannerItem point={point} pos="end" />;
                            default: return <PlannerItem point={point} pos="mid" />;
                        }
                    })}
                </Stack>
            </Box>
        </Grid>
    );
}

export default Planner;