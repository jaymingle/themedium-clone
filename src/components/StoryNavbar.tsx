import {Box, Button} from "@mui/material";

const StoryNavbar = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
                backgroundColor: '#242424',
                height: '70px',
                paddingX: 3,
                paddingY: 1
            }}>
                <img width={100} height={30}
                     src="https://miro.medium.com/v2/resize:fit:8976/1*Ra88BZ-CSTovFS2ZSURBgg.png" alt="Medium Logo"/>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box sx={{display: 'flex', gap: 2}}>
                        <Button variant="contained" sx={{color: '#fff', backgroundColor: '#000', textTransform: 'initial', border: '1px solid #fff', borderRadius: '25px', fontSize: '12px'}}>Sign In</Button>
                        <Button variant="contained" sx={{color: '#000', backgroundColor: '#fff', textTransform: 'initial', borderRadius: '25px', fontSize: '12px'}}>Sign up</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default StoryNavbar;
