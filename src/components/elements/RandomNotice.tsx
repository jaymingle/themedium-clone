import {Box, styled, Typography} from "@mui/material";

const RandomNotice = () => {

    const StyledBox = styled(Box)({
        margin: 0,
        padding: 0,
        backgroundColor: '#000'
    })

    return (
        <StyledBox>
            <Typography sx={{textAlign: 'center'}} variant="subtitle1">The Random Notice Project 🌷</Typography>
        </StyledBox>
    );
};

export default RandomNotice;