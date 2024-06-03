import Navbar from "../Navbar.tsx";
import {Box, Stack, Typography} from "@mui/material";
import Posts from "../Posts.tsx";
import Rightbar from "../Rightbar.tsx";

const Profile = () => {
    return (
        <Box>
            <Navbar/>
            <Stack sx={{marginX:{xs:0, sm: 2, md: 5, lg: 20}, marginY:2}} spacing={4} direction="row">
                <Posts/>
                <Rightbar/>
            </Stack>
        </Box>
    );
};

export default Profile;