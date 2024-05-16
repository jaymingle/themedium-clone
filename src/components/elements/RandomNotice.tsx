import {Box, styled, Typography} from "@mui/material";

const RandomNotice = () => {

    const StyledBox = styled(Box)({
        marginTop: 5,
    })

    return (
        <StyledBox>
            <Typography sx={{textAlign: 'center'}} variant="subtitle1">The Random Notice Project 🌷</Typography>
        </StyledBox>
    );
};

export default RandomNotice;