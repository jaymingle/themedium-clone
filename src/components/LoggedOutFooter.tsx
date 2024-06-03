import {Box, Button} from "@mui/material";

const LoggedOutFooter = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: 20,
                backgroundColor: '#fff',
                height: '70px',
                paddingX: 1
            }}>
                 {/*<img width={150} height={30}*/}
                 {/*    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/1595px-Medium_%28website%29_logo.svg.png" alt="Medium Logo"/>*/}
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Help</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Status</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>About</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Careers</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Press</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Blog</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Privacy</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Terms</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Text to speech</Button>
                        <Button sx={{color: '#000', textTransform: 'initial'}}>Teams</Button>
                    </Box>
                    {/*<Button sx={{color: '#000', textTransform: 'initial', display:{xs: 'none', sm:'block'}}}>Sign In</Button>*/}
                    {/*<Button variant="contained" sx={{backgroundColor: '#000', color: '#fff', borderRadius: '25px', fontSize:{ xs: '8px'} }}>Get Started</Button>*/}
                </Box>
            </Box>
        </Box>
    );
};

export default LoggedOutFooter;