import {Box, Card, Stack} from "@mui/material";

const Post = () => {
    return (
        <Card>
            <Box>
                Text
                <Stack>
                    Image
                    name
                    Date
                    ⭐️
                </Stack>
                Text
                <Box>
                    <Stack>
                        category
                        number of read
                    </Stack>
                    <Stack>
                        icon1
                        icon2
                        icon3
                    </Stack>
                </Box>
            </Box>
            <Box>
                Image
            </Box>
        </Card>
    );
};

export default Post;