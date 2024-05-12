import {Box} from "@mui/material";

const Rightbar = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }} bgcolor="green">
            The Rightbar
        </Box>
    );
};

export default Rightbar;