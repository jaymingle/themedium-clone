import React from 'react';
import {AppBar, Box, Toolbar} from "@mui/material";

const Home = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" alt="Medium Logo"/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Home;