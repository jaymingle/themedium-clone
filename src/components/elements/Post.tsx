import {Avatar, Box, Card, Stack, styled, Typography} from "@mui/material";
import {BookmarkAdd, MoreHoriz, RemoveCircleOutline} from "@mui/icons-material";

const Post = () => {

    const StyledCard = styled(Card)({
        display: 'flex',
        padding: '0 10px',
        alignItems: 'center',
        gap: 20
    })

    return (
        <StyledCard>
            <Box>
                <Stack sx={{}} spacing={2} direction="row">
                    <Avatar sx={{width: 28, height: 28}} alt="Remy Sharp" src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',gap: 1}}>
                        <Typography variant="caption">Jay Mingle</Typography>
                        <Typography sx={{}} variant="caption">. 13 Jan 2024</Typography>
                    </Box>
                </Stack>
                <Box sx={{margin: '5px'}}>
                    <Typography sx={{fontSize: '14px', marginTop: '10px', marginBottom: '5px', fontWeight: 700}} variant="h3">The Title</Typography>
                    <Typography variant="body2">The cryptocurrency industry and blockchains as a whole are still in their infancy and looking for true product-market fit. Though we’ve seen glimpses of this in the past, through innovations like DeFi, NFTs, ....</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Stack direction="row" spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h6">Category</Typography>
                        <Typography variant="caption">8 min read</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <BookmarkAdd/>
                        <RemoveCircleOutline/>
                        <MoreHoriz/>
                    </Stack>
                </Box>
            </Box>
            <Box>
                <img width={250} height={200} src="https://mui.com/static/images/cards/paella.jpg" alt="Image"/>
            </Box>
        </StyledCard>
    );
};

export default Post;