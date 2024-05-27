import {Box, Typography} from "@mui/material";
import StaffPick from "./elements/StaffPick.tsx";

const Rightbar = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }} bgcolor="green">
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <Typography variant="subtitle1">Staff Picks</Typography>
                <StaffPick/>
            </Box>
        </Box>
    );
};

export default Rightbar;