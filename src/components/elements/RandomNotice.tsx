import {useState} from 'react'

import {Box, IconButton, styled, Typography} from "@mui/material";

const RandomNotice = () => {

    const [displayNotice, setDisplayNotice] = useState<boolean>(true)

    const StyledBox = styled(Box)({
        marginBottom: 5,
        padding: '5px',
        backgroundColor: '#cfd8dc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    })

    return (
        <Box>
        {
            displayNotice &&   <StyledBox>
                        <Typography sx={{textAlign: 'center', fontSize: '12px'}} variant="subtitle1">Donec vitae sapien ut libero
                            venenatis faucibus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
                            🌷</Typography>
                        <IconButton sx={{color: 'black', fontSize: '12px'}} aria-label="Delete Notice" onClick={() => setDisplayNotice(false)}>x</IconButton>
                    </StyledBox>
        }
    </Box>);
};

export default RandomNotice;