import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import LogedOutNavbar from "../LogedOutNavbar.tsx";

const Home = () => {
    return (
        <Box sx={{backgroundColor: '#FEC016'}}>
            <LogedOutNavbar/>
            <Box sx={{height: '2px', width: '100%', backgroundColor:'#000'}}></Box>
            <Box sx={{display: 'flex', marginLeft: {}}}>
                <Box>
                    <Typography variant="h1" sx={{color: '#000', fontWeight: 500}}>Stay Curious.</Typography>
                    <Typography variant="subtitle1" sx={{color: '#000', fontSize: '26px'}}>Discover stories, thinking, and expertise from writers on any topic.</Typography>
                    <Button sx={{color: '#fff', backgroundColor: '#000', borderRadius: '25px', marginTop: 10}} variant="contained">Start Reading</Button>
                </Box>
                <Box sx={{display:{xs: 'none', sm:'none', md: 'none', lg: 'block'}}}>
                    <img height={800} width={950} src="../../../public/assets/mm_image.png" alt="MMMM Image"/>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;