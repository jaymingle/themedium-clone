import {Box, Stack} from "@mui/material";
import Navbar from "../Navbar.tsx";
import RandomNotice from "../elements/RandomNotice.tsx";
import Posts from "../Posts.tsx";
import Rightbar from "../Rightbar.tsx";

const AppLanding = () => {
    return (
        <Box>
            <Navbar/>
            <RandomNotice />
            <Stack sx={{marginX:{xs:0, sm: 2, md: 5, lg: 20}, marginY:2}} spacing={4} direction="row">
                <Posts/>
                <Rightbar/>
            </Stack>
        </Box>
    );
};

export default AppLanding;