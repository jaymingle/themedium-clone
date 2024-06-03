import React from 'react';
import {
    Avatar,
    Box, Button, IconButton,
    Modal, Stack, styled, TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Description, Image, VideoCameraBack} from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '70%', sm: '50%', md: '50%'},
    height: {xs: '50%', sm: '50%', md: '50%'},
    borderRadius: 5,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "15px",
    marginBottom: "20px",
    marginTop: "30px"
})

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})

const PostButton = styled(Button)(({theme}) => ({
    height: 50,
    width: 150,
    marginTop: 20,
    backgroundColor: theme.palette.secondary.main,
}))

const AppAuthWithText = ({theText}) => {

    const [open, setOpen] = React.useState<boolean>(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <Box>
            {/*The Text on display*/}
            <Tooltip title={theText} onClick={handleOpen}>
                {/*<Button variant="contained" sx={{color: '#fff', backgroundColor: '#000', textTransform: 'initial', border: '1px solid #fff', borderRadius: '25px', fontSize: '12px'}}>{theText}</Button>*/}
                <Typography>{theText}</Typography>
           </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h5" component="h2">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar>J</Avatar>
                        <Typography id="modal-modal-description">Jay Mingle </Typography>
                    </UserBox>

                    <TextField sx={{width: '80%'}} placeholder="Post Title?" id="outlined-basic" label="Post Title" variant="outlined" />

                    <TextField
                        id="standard-multiline-static"
                        multiline
                        sx={{width: "100%", marginTop: {xs: '10px', sm: '50px'}}}
                        rows={3}
                        placeholder="What do you have in mind?"
                        variant="standard"
                    />
                    <StyledBox>
                        <Stack direction="row" sx={{marginTop: 4}}>
                            <Tooltip title="Add Image">
                                <IconButton aria-label="Image" color="success">
                                    <Image />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Add Video">
                                <IconButton aria-label="Video">
                                    <VideoCameraBack aria-label="Video" color="warning" />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        <PostButton sx={{backgroundColor: '#fff'}} variant="contained" endIcon={<Description />}>
                            Write
                        </PostButton>
                    </StyledBox>
                </Box>
            </Modal>
        </Box>
    );
};

export default AppAuthWithText;