import {Box, Typography} from "@mui/material";

const Rightbar = () => {
    return (
        <Box flex={4} sx={{display:{xs:"none", sm:"block"}, }} bgcolor="green">
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <Typography variant="subtitle1">Staff Picks</Typography>
            </Box>
        </Box>
    );
};

export default Rightbar;