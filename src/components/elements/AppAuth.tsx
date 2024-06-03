import React from 'react';
import {
    Box, Button,  Input,
    Modal, styled,
    Tooltip,
    Typography
} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '70%', sm: '50%', md: '25%'},
    height: {xs: '50%', sm: '50%', md: '25%'},
    borderRadius: 5,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
};

const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})

const StyledInput = styled(Input)(({
    border: '1px solid grey',
    borderRadius: 5,
    width: '320px',
    paddingLeft: 5,
    display: 'flex',
    marginTop: 2,
    marginBottom: 2,
}))

type Props = {
    theText: string
}


const AppAuth: React.FC<Props> = ({theText}) => {

    const [open, setOpen] = React.useState<boolean>(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const[signIn, setSignIn] = React.useState<boolean>(true)

    const SignInElement = <StyledBox>
        <form>
            <Typography variant='subtitle1'>Sign In</Typography>
            <StyledInput placeholder="Email" type="email"/>
            <StyledInput placeholder="Password" type="password"/>
            <StyledInput sx={{width: '50%', backgroundColor: 'purple', color: '#fff'}} type="submit" value="Sign In"/>
        </form>
    </StyledBox>

    const SignUpElement = <StyledBox>
        <form>
            <Typography variant='subtitle1'>Sign Up</Typography>
            <StyledInput placeholder="Email" type="email"/>
            <StyledInput placeholder="Password" type="password"/>
            <StyledInput sx={{width: '50%', backgroundColor: 'green', color: '#fff'}} type="submit" value="Sign Up"/>
        </form>
    </StyledBox>

    return (
        <Box>
            {/*The Text on display*/}
            <Tooltip title={theText} onClick={handleOpen}>
                <Button variant="contained" sx={{color: '#fff', backgroundColor: '#000', textTransform: 'initial', border: '1px solid #fff', borderRadius: '25px', fontSize: '12px'}}>{theText}</Button>
            </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button variant="contained" onClick={() => setSignIn(value => !value)}>{signIn ? 'Sign Up' : 'Sign In'}</Button>
                    {signIn ? SignInElement : SignUpElement}
                </Box>
            </Modal>
        </Box>
    );
};

export default AppAuth;