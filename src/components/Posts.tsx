import {Box, useTheme} from "@mui/material";

const Posts = () => {

    const theme = useTheme()
    return (
        <Box flex={6} px={{xs: 2, sm: 3, md: 5}}  sx={{backgroundColor: theme.palette.secondary.main}}>
            The Post
        </Box>
    );
};

export default Posts;