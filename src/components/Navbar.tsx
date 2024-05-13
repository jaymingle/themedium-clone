import {
    AppBar,
    Box,
    styled,
    Toolbar,
    InputBase,
    alpha,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText
} from "@mui/material";
import {EditNote, Inbox, Search as TheSearch} from '@mui/icons-material';
const Navbar = () => {

    // const theme = useTheme()

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const StyledBox = styled(Box)({
        display: 'flex',
    })

    const Search = styled('div')((theme) => ({
        position: 'relative',
        borderRadius: '25px',
        backgroundColor: alpha('#e57373', 0.15),
        '&:hover':{
            backgroundColor: alpha('#ce93d8', 0.25)
        },
        marginLeft: 0,
        marginRight: 5,
        width: '60%',
        padding: '2px 30px 2px 10px',
    }))

    const SearchIconWrapper = styled('div')((theme) => ({
        padding: '0 5',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }))

    const StyledInputBase = styled(InputBase)((theme) => ({
        color: 'inherit',
        '& .MuiInputBase-input':{
            padding: '1 1 1 0',
            paddingLeft: '30px',
            width: '100%'
        }
    }))

    return (
        <AppBar sx={{marginBottom: 1}} position="sticky">
            <StyledToolBar>
                <StyledBox>
                    <img width={40} src="https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png"
                         alt="medium logo"/>
                    <Search sx={{display:{xs: 'none', sm:'block'}}}>
                        <SearchIconWrapper>
                            <TheSearch/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="search..." inputProps={{ 'aria-label': 'search' }}/>
                    </Search>
                </StyledBox>
                <StyledBox>
                    <List sx={{width: '100%', maxWidth: '120px'}}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <EditNote sx={{ width: '40px', height: '40px'}}/>
                                </ListItemIcon>
                                <ListItemText  primary="Write" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </StyledBox>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;