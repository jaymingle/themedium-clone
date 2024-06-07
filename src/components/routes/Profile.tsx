import Navbar from "../Navbar.tsx";
import {Box, Stack} from "@mui/material";
import Posts from "../Posts.tsx";
import RightbarProfile from "../RightbarProfile.tsx";

const Profile = () => {
    return (
        <Box>
            <Navbar/>
            <Stack sx={{marginX:{xs:0, sm: 2, md: 5, lg: 20}, marginY:2}} spacing={4} direction="row">
                <Posts/>
                <RightbarProfile/>
            </Stack>
        </Box>
    );
};

export default Profile;