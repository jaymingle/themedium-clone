import React from 'react';
import {
    AppBar,
    Box,
    styled,
    Toolbar,
    InputBase,
    alpha,
    Badge, Avatar,  Menu, MenuItem, Button
} from "@mui/material";
import {Notifications, Search as TheSearch} from '@mui/icons-material';
import Write from "./elements/Write.tsx";


const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [open, setOpen] = React.useState<boolean>(false)

    const handleClick = () => {
        setOpen(open => !open)
    }

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const StyledBox = styled(Box)({
        display: 'flex',
    })

    const Search = styled('div')(() => ({
        position: 'relative',
        borderRadius: '25px',
        backgroundColor: alpha('#9e9e9e', 0.15),
        '&:hover':{
            backgroundColor: alpha('#bdbdbd', 0.25)
        },
        marginLeft: 0,
        marginRight: 5,
        width: '60%',
        padding: '2px 30px 2px 10px',
    }))

    const SearchIconWrapper = styled('div')(() => ({
        padding: '0 5',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }))

    const StyledInputBase = styled(InputBase)(() => ({
        color: 'inherit',
        '& .MuiInputBase-input':{
            padding: '1 1 1 0',
            paddingLeft: '30px',
            width: '100%'
        }
    }))


    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <StyledBox sx={{gap: '20px'}}>
                    <img width={40} src="https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png"
                         alt="medium logo"/>
                    <Search sx={{display: {xs: 'none', sm: 'block'}}}>
                        <SearchIconWrapper>
                            <TheSearch/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="search..." inputProps={{'aria-label': 'search'}}/>
                    </Search>
                </StyledBox>

                <StyledBox sx={{alignItems: "center", gap: 1}}>

                    <Write/>

                    <Badge badgeContent={4} color="primary" sx={{display: {xs: "none", sm: "none", md: "block"}}}>
                        <Notifications color="action"/>
                    </Badge>
                    <Button onClick={handleClick}>
                        <Avatar
                            sx={{}}
                            alt="User Name Letter"
                            src="/broken-image.jpg"
                        >
                            B
                        </Avatar>
                    </Button>

                    <Menu
                        id="demo-positioned-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={e => setOpen(false)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{marginTop: '50px'}}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </StyledBox>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;