import React from 'react';
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal, Stack, styled, TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {EditNote} from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '70%', sm: '50%', md: '50%'},
    height: {xs: '40%', sm: '50%', md: '60%'},
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

const Post = () => {

    const [open, setOpen] = React.useState<boolean>(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <Box>
            <Tooltip title="Write Post" onClick={handleOpen}>
                <List sx={{width: '100%', maxWidth: '120px'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EditNote sx={{ width: '40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText  primary="Write" sx={{marginLeft: '-16px'}} />
                        </ListItemButton>
                    </ListItem>
                </List>
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
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        sx={{width: "100%", marginTop: {xs: '10px', sm: '50px'}}}
                        rows={3}
                        placeholder="What do you have in mind?"
                        variant="standard"
                    />
                    <Stack direction="row" spacing={5}>

                    </Stack>
                </Box>
            </Modal>
        </Box>
    );
};

export default Post;