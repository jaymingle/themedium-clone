import React from 'react';
import {AppBar, Box, Button, Stack, Toolbar} from "@mui/material";

const Home = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Stack position="static">
                <img width={300} height={150} src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="Medium Logo"/>
                <Stack>
                    <Button>Our Story</Button>
                    <Button>Membership</Button>
                    <Button>Write</Button>
                    <Button>Sign In</Button>
                    <Button>Get Started</Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Home;