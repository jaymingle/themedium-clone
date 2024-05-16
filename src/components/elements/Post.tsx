import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    Tooltip,
    Typography
} from "@mui/material";
import {EditNote} from "@mui/icons-material";


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
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
};

export default Post;