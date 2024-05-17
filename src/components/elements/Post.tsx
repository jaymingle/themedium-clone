import {Avatar, Box, Card, Stack, Typography} from "@mui/material";
import {BookmarkAdd, MoreHoriz, RemoveCircleOutline} from "@mui/icons-material";

const Post = () => {
    return (
        <Card>
            <Box>
                Text
                <Stack spacing={2} direction="row">
                    <Avatar sx={{width: 30, height:30}} alt="Remy Sharp" src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                    <Box>
                        <Typography variant="subtitle2">Jay Mingle</Typography>
                        <Typography variant="caption">13 Jan 2024</Typography>
                    </Box>
                </Stack>
                Text
                <Box>
                    <Stack>
                        category
                        <Typography variant="caption">8 min read</Typography>
                    </Stack>
                    <Stack>
                        <BookmarkAdd/>
                        <RemoveCircleOutline/>
                        <MoreHoriz/>
                    </Stack>
                </Box>
            </Box>
            <Box>
                <img src="https://mui.com/static/images/cards/paella.jpg" alt="Image"/>
            </Box>
        </Card>
    );
};

export default Post;