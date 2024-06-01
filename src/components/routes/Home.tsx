import React from 'react';
import {Box, Button} from "@mui/material";

const Home = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: 20,
                    backgroundColor: '#FF5733',
                    height: '70px'
                }}>
                    <img width={150} height={30}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/1595px-Medium_%28website%29_logo.svg.png" alt="Medium Logo"/>
                    <Box sx={{display: 'flex', gap: 2}}>
                        <Box sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>
                            <Button sx={{color: '#000', textTransform: 'initial'}}>Our Story</Button>
                            <Button sx={{color: '#000', textTransform: 'initial'}}>Membership</Button>
                            <Button sx={{color: '#000', textTransform: 'initial'}}>Write</Button>
                            <Button sx={{color: '#000', textTransform: 'initial'}}>Sign In</Button>
                        </Box>
                        <Button variant="contained" sx={{backgroundColor: '#000', color: '#fff', borderRadius: '25px'}}>Get
                            Started</Button>
                    </Box>
            </Box>
        </Box>
    );
};

export default Home;