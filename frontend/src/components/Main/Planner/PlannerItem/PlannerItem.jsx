import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Paper";

import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import FlagIcon from '@mui/icons-material/Flag';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

function PlannerItem({ point, setPoints, pos, index }) {

    let icon = null;

    switch (pos) {
        case "start": icon = <FlagIcon className="planner-item-icon" />; break;
        case "end": icon = <SportsScoreIcon className="planner-item-icon" />; break;
        default: icon = <CircleIcon className="planner-item-icon" />; break;
    }

    const handleRemovePoint = () => {
        setPoints(prev => {
            prev.splice(index, 1);
            return [...prev];
        });
    };

    return (
        <Paper elevation={0} sx={{ padding: 2 }} className="planner-item">
            {icon}
            <Typography align="center" variant="body1" className="planner-item-text">
                {point['name']}
            </Typography>
            <IconButton sx={{ padding: 0 }} onClick={handleRemovePoint}>
                <CancelIcon className="planner-item-cancel" />
            </IconButton>
        </Paper>
    );
}

export default PlannerItem;