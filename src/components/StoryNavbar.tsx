import {Box} from "@mui/material";
import AppAuth from "./elements/AppAuth.tsx";

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
                        <AppAuth theText="Sign In"/>
                        <AppAuth theText="Sign Up"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default StoryNavbar;
