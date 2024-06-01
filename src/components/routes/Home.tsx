import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import LogedOutNavbar from "../LogedOutNavbar.tsx";

const Home = () => {
    return (
        <Box>
            <LogedOutNavbar/>
            <Box sx={{height: '2px', width: '100%', backgroundColor:'#000'}}></Box>
            <Box>
                <Box>
                    <Typography>Stay Curious</Typography>
                    <Typography>Discover stories, thinking, and expertise from writers on any topic.</Typography>
                    <Button variant="contained">Start Reading</Button>
                </Box>
                <img src="../../assets/mm_image.png" alt="MMMM Image"/>
            </Box>
        </Box>
    );
};

export default Home;