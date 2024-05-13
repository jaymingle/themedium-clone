import {AppBar, Box, styled, Toolbar, InputBase, useTheme, alpha} from "@mui/material";
import {Search as TheSearch} from '@mui/icons-material';
const Navbar = () => {

    // const theme = useTheme()

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const Search = styled('div')((theme) => ({
        position: 'relative',
        borderRadius: '7px',
        backgroundColor: alpha('#e57373', 0.15),
        '&:hover':{
            backgroundColor: alpha('#ce93d8', 0.25)
        },
        marginLeft: 0,
        marginRight: 5,
        width: '60%',
        padding: '2px 30px',
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
            paddingLeft: '50px',
            width: '100%'
        }
    }))

    return (
        <AppBar sx={{marginBottom: 1}} position="sticky">
            <StyledToolBar>
                <Box>
                    <img width={40} src="https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png"
                         alt="medium logo"/>
                    <Search>
                        <SearchIconWrapper>
                            <TheSearch/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="search..." inputProps={{ 'aria-label': 'search' }}/>
                    </Search>
                </Box>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;