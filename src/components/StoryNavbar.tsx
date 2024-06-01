import React from 'react';
import {Box, Button} from "@mui/material";

const StoryNavbar = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                backgroundColor: '#242424',
                height: '70px',
                paddingX: 3,
                paddingY: 1
            }}>
                <img width={150} height={30}
                     src="https://miro.medium.com/v2/resize:fit:8976/1*Ra88BZ-CSTovFS2ZSURBgg.png" alt="Medium Logo"/>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Our Story</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Membership</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Write</Button>
                    </Box>
                    <Button sx={{color: '#000', textTransform: 'initial', display:{xs: 'none', sm:'block'}}}>Sign In</Button>
                    <Button variant="contained" sx={{backgroundColor: '#000', color: '#fff', borderRadius: '25px', fontSize:{ xs: '8px'} }}>Get Started</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default StoryNavbar;