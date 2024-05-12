import {Box} from "@mui/material";

const Rightbar = () => {
    return (
        <Box flex={3} sx={{background: 'green', display:{sx: 'none', sm: 'block'}}}>
            The Rightbar
        </Box>
    );
};

export default Rightbar;