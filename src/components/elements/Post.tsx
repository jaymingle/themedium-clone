import React from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import {EditNote} from "@mui/icons-material";


const Post = () => {

    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <Box>
            <Tooltip title="Write Post">
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
        </Box>
    );
};

export default Post;