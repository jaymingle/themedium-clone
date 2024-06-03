import {Box, Button} from "@mui/material";

const StoryFooter = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                backgroundColor: '#fff',
                height: '70px',
                paddingX: 4
            }}>
                <img width={150} height={30}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/1595px-Medium_%28website%29_logo.svg.png" alt="Medium Logo"/>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Our Story</Button>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Membership</Button>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Write</Button>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Our Story</Button>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Membership</Button>
                        <Button sx={{color: '#000', textTransform: 'initial', fontSize: '10px', textDecoration: 'underline', }}>Write</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default StoryFooter;