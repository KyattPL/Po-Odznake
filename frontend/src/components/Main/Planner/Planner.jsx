import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import "../../../styles/Main/Planner/planner.css";

function Planner() {
    return (
        <Grid item xs={6} sm={4} md={3} xl={2}>
            <Box className="planner-container">
                <Stack direction="column" spacing={2}
                    divider={<Divider orientation="horizontal" flexItem />}>
                    <Paper elevation={0} sx={{ padding: 2, mt: 1 }}>test 1</Paper>
                    <Paper elevation={0} sx={{ padding: 2 }}>test 2</Paper>
                    <Paper elevation={0} sx={{ padding: 2 }}>test 3</Paper>
                    <Paper elevation={0} sx={{ padding: 2 }}>test 4</Paper>
                    <Paper elevation={0} sx={{ padding: 2 }}>test 5</Paper>
                    <Paper elevation={0} sx={{ padding: 2 }}>test 6</Paper>
                </Stack>
            </Box>
        </Grid>
    );
}

export default Planner;