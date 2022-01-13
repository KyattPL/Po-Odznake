import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "../../../../styles/Main/Modal/line_segments_empty.css";

// TODO: ewentualnie dodać napis pokazujący jaki to dystans i ile punktów (dla aktualnie wybranych punktów geo.)
function LineSegmentsEmpty() {

    return (
        <Stack spacing={5} className="line-segments-empty-modal-box">
            <Typography variant="h2" className="line-segments-empty-modal-text ">
                Brak odcinków
            </Typography>
        </Stack>
    );
}

export default LineSegmentsEmpty;