import React from 'react';
import {Box, styled, Typography} from "@mui/material";

const StaffPick = () => {

    const imageStyles = {
        borderRadius: '250px'
    }

    const StyledBox = styled(Box)({
        display: 'flex',
        gap: 5
    })

    return (
        <Box sx={{marginY: 4}}>
            <StyledBox>
                <img height={20} style={imageStyles} src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="User Image"/>
                <Typography variant="body2">UserName</Typography>
                <Typography variant="caption">in</Typography>
                <Typography variant="subtitle2">Title</Typography>
            </StyledBox>
            <Typography variant="body1">The full title of the article here</Typography>
        </Box>
    );
};

export default StaffPick;