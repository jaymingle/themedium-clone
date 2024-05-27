import {Box, useTheme} from "@mui/material";
import Post from "./elements/Post.tsx";
import Categories from "./elements/Categories.tsx";

const Posts = () => {

    const theme = useTheme()
    return (
        <Box flex={6} px={{xs: 2, sm: 3, md: 5}} py={{xs: 2, sm: 3, lg: 4}}>
            <Categories/>
            <Post/>
        </Box>
    );
};

export default Posts;