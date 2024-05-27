import {Avatar, Box, Card, IconButton, Stack, styled, Tooltip, Typography} from "@mui/material";
import {BookmarkAdd, MoreHoriz, RemoveCircleOutline} from "@mui/icons-material";

const Post = () => {

    const imageStyles = {
        height: {
            xs: '30px',
            sm: '100px',
            md: '120px',
            lg: '200px',
        },
        width: {
            xs: '30px',
            sm: '100px',
            md: '120px',
            lg: '250px',
        },
        // paddingRight: 2
    };

    const StyledCard = styled(Card)({
        display: 'flex',
        alignItems: 'center',
        gap: 20
    })

    return (
        <StyledCard sx={{padding: {xs: '10px 20px', sm: '4px 8px', md: '16px 12px', lg: '24px 16px'}}}>
            <Box>
                <Stack sx={{marginBottom: 3}} spacing={2} direction="row">
                    <Avatar sx={{width: 28, height: 28}} alt="Remy Sharp" src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',gap: 1}}>
                        <Typography variant="caption">Jay Mingle</Typography>
                        <Typography variant="caption">. 13 Jan 2024</Typography>
                    </Box>
                </Stack>
                <Box sx={{margin: '5px'}}>
                    <Typography sx={{fontSize: '14px', marginTop: '10px', marginBottom: 2, fontWeight: 700}} variant="h3">The Title</Typography>
                    <Typography sx={{marginBottom: 3, display:{xs: 'none', sm: 'none', md: 'block'}}} variant="body2">The cryptocurrency industry and blockchains as a whole are still in their infancy and looking for true product-market fit. Though we’ve seen glimpses of this in the past, through innovations like DeFi, NFTs, ....</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Stack direction="row" spacing={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography sx={{fontSize: '14px', backgroundColor: '#D3D3D3', padding: '2px 5px', borderRadius: '20px'}} variant="h6">Category</Typography>
                        <Typography variant="caption">8 min read</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box>
                <Box sx={imageStyles}>
                    <img src="https://mui.com/static/images/cards/paella.jpg" alt="Image"/>
                </Box>
                <Box sx={{marginY:{}}}>
                    <Tooltip title="Save">
                        <IconButton>
                            <BookmarkAdd/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Show Less">
                        <IconButton>
                            <RemoveCircleOutline/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="More">
                        <IconButton>
                            <MoreHoriz/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </StyledCard>
    );
};

export default Post;