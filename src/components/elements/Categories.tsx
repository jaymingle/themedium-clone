import React from 'react';
import {Box, Stack, Tab, Tabs} from "@mui/material";

const Categories = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

        return (
            <Stack sx={{marginY: 2}}>
                <Box sx={{maxWidth: {xs: 320, sm: 480}, bgcolor: 'background.paper'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Item One"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                        <Tab label="Item Four"/>
                        <Tab label="Item Five"/>
                        <Tab label="Item Six"/>
                        <Tab label="Item Seven"/>
                    </Tabs>
                </Box>
                <hr/>
            </Stack>
        );
    };
}

export default Categories;