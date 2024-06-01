import React from 'react';
import {Box, Button, styled, Typography} from "@mui/material";
import LogedOutNavbar from "../LogedOutNavbar.tsx";
import LoggedOutFooter from "../LoggedOutFooter.tsx";

const Home = () => {

    const FlexBoxed = styled(Box)({
        display: 'flex',
        marginLeft: '250px',
        marginTop: 10
    })

    const LeftBox = styled(Box)({
        marginTop: '150px',
        paddingBottom: '383px'
    })

    const RightBox = styled(Box)({
        marginLeft: '140px'
    })

    return (
        <Box>
            <Box sx={{backgroundColor: '#FEC016'}}>
                <LogedOutNavbar/>
                <Box sx={{height: '2px', width: '100%', backgroundColor:'#000'}}></Box>
                <FlexBoxed>
                    <LeftBox>
                        <Typography variant="h1" sx={{color: '#000', fontWeight: 500}}>Stay Curious.</Typography>
                        <Typography variant="subtitle1" sx={{color: '#000', fontSize: '26px'}}>Discover stories, thinking, and expertise from writers on any topic.</Typography>
                        <Button sx={{color: '#fff', backgroundColor: '#000', borderRadius: '25px', marginTop: 10}} variant="contained">Start Reading</Button>
                    </LeftBox>
                    <RightBox sx={{display:{xs: 'none', sm:'none', md: 'none', lg: 'block'}}}>
                        <img height={600} width={550} src="../../../public/assets/mm_image.png" alt="MMMM Image"/>
                    </RightBox>
                </FlexBoxed>
            </Box>
            <LoggedOutFooter/>
        </Box>
    );
};

export default Home;