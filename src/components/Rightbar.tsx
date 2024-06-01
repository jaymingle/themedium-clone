import {Box, Typography} from "@mui/material";
import StaffPick from "./elements/StaffPick.tsx";
import Tags from "./elements/Tags.tsx";
import More from "./elements/More.tsx";

const Rightbar = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }} bgcolor="green">
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <Typography variant="h6" sx={{marginY: "10px", fontSize: "18px"}}>Staff Picks</Typography>
                <StaffPick/>
                <StaffPick/>
                <StaffPick/>
                <More text="See the full list"/>
                <Typography variant="h6" sx={{marginTop: 3, fontSize: "18px", paddingY: 2}}>Recommended Topics</Typography>
                <Tags/>
                <More text="See more topics"/>
            </Box>
        </Box>
    );
};

export default Rightbar;