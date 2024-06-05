import React from 'react';
import {Box, styled, Typography} from "@mui/material";
import LogedOutNavbar from "../LogedOutNavbar.tsx";

const PageNotFound = () => {

    const StyledBoxLayout = styled(Box)({
        marginX: {xs:0, sm: 2, md: 5, lg: 20},
        marginY: 2
    })

    return (
        <Box>
            <LogedOutNavbar/>

            <StyledBoxLayout>
                <Typography>Page Not Found</Typography>
            </StyledBoxLayout>
        </Box>
    );
};

export default PageNotFound;