import {Box, Typography} from "@mui/material";
import StaffPick from "./elements/StaffPick.tsx";
import Tags from "./elements/Tags.tsx";

const Rightbar = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }} bgcolor="green">
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <Typography variant="h5">Staff Picks</Typography>
                <StaffPick/>
                <StaffPick/>
                <StaffPick/>
                <Tags/>
            </Box>
        </Box>
    );
};

export default Rightbar;