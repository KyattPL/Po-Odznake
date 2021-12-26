import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Paper";

import CircleIcon from '@mui/icons-material/Circle';
import FlagIcon from '@mui/icons-material/Flag';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

function PlannerItem(props) {

    let icon = null;

    switch (props.pos) {
        case "start": icon = <FlagIcon className="planner-item-text"/>; break;
        case "end": icon = <SportsScoreIcon className="planner-item-text"/>; break;
        default: icon = <CircleIcon className="planner-item-text"/>; break;
    }

    return (
        <Paper elevation={0} sx={{ padding: 2 }} className="planner-item">
            {icon}
            <Typography align="center" variant="body1" className="planner-item-text">
                {props.point}
            </Typography>
        </Paper>
    );
}

export default PlannerItem;