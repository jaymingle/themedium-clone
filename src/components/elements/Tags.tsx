import React from 'react';
import {Box, styled} from "@mui/material";

const Tags = () => {

    const StyledBox = styled(Box)({
        backgroundColor: 'grey',
        color: 'black',
        borderRadius: '25px',
        paddingX: 2,
        paddingY: 4
    })

    return (
        <Box>
            Tags
        </Box>
    );
};

export default Tags;