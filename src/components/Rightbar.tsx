import {Box, Typography} from "@mui/material";
import SideHeading from "./elements/SideHeading.tsx";
import StaffPick from "./elements/StaffPick.tsx";
import More from "./elements/More.tsx";
import Tags from "./elements/Tags.tsx";
import {BookmarkAdd} from "@mui/icons-material";


const Rightbar = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }}>
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <SideHeading heading="Staff Picks"/>
                <StaffPick/>
                <StaffPick/>
                <StaffPick/>
                <More text="See the full list"/>
                <SideHeading heading="Recommended Topics"/>
                <Tags/>
                <More text="See more topics"/>
                <SideHeading heading="Reading List"/>
                <Typography sx={{paddingBottom: 1}}>Click the <BookmarkAdd/> on any story to easily add it to your reading list or a custom list that you can share.</Typography>
            </Box>
        </Box>
    );
};

export default Rightbar;