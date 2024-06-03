import React, {useState} from 'react';
import {Box, Stack, styled, Tab, Tabs, Typography} from "@mui/material";
import { tabsClasses } from '@mui/material/Tabs';


const Categories = () => {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const tabClickHandler = () => {
        console.log('Item 1 Clicked')
    }

    const ScrollableBox = styled(Box)({
        [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
        },
        // backgroundColor: 'grey',
    })

    const StyledTab = styled(Tab)({
        textTransform: 'initial',
        color: '#000',
        '&:hover': {
            color: 'grey'
        },
        '&.Mui-selected':{
            color: 'grey'
        }
    })

    return (
        <Stack sx={{marginY: 2}}>
            <Typography variant="h3" sx={{marginX:{xs:0, sm: 2, md: 5, lg: 1}, marginTop: 5, marginBottom: 5}}>Jay Mingle</Typography>
            <ScrollableBox sx={{maxWidth: { xs: 370, sm: 480, md: 720, lg: 920},}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable categories tab"
                >
                    <StyledTab onClick={tabClickHandler} label="Item One" />
                    <StyledTab label="Item Two" />
                    <StyledTab label="Item Three" />
                </Tabs>
            </ScrollableBox>
            <hr/>
        </Stack>
    );
};

export default Categories;