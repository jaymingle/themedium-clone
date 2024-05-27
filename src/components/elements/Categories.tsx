import React, {useState} from 'react';
import {Box, Stack, styled, Tab, Tabs} from "@mui/material";
import { tabsClasses } from '@mui/material/Tabs';
import {grey} from "@mui/material/colors";


const Categories = () => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const ScrollableBox = styled(Box)({
        [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
        },
        // backgroundColor: 'grey',
    })

    return (
        <Stack sx={{marginY: 2}}>
            <ScrollableBox sx={{maxWidth: { xs: 370, sm: 480, md: 720, lg: 920},}}>
                <Tabs
                    // sx={{color: 'red'}}
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable categories tab"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                    <Tab label="Item Four" />
                    <Tab label="Item Five" />
                    <Tab label="Item Six" />
                    <Tab label="Item Seven" />
                </Tabs>
            </ScrollableBox>
            <hr/>
        </Stack>
    );
};

export default Categories;