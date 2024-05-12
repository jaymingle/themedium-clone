import {AppBar, styled, Toolbar} from "@mui/material";

const Navbar = () => {

    const StyledToolBar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    return (
        <AppBar sx={{marginBottom: 1}} position="sticky">
            <StyledToolBar>
                Navbar
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;