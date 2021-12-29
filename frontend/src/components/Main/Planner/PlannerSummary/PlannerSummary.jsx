import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PlannerSummary(props) {

    const { points, distance, altitude } = props;

    return (
        <Box className="planner-summary-box">
            <Typography variant="h6" align="center">Suma punktów za trasę: {points}</Typography>
            <Typography variant="h6" align="center">Odległość trasy: {distance}km</Typography>
            <Typography variant="h6" align="center">Różnica wysokości: {altitude}m</Typography>
        </Box>
    );
}

export default PlannerSummary;