import {Avatar, Box, Link, Typography} from "@mui/material";


const RightbarProfile = () => {
    return (
        <Box flex={3} sx={{display:{xs:"none", sm:"block"}, }}>
            <Box sx={{marginTop: '60px', marginLeft: 2}}>
                <Avatar
                    sx={{ bgcolor: 'darkblue' }}
                    alt="Jay Mingle"
                    src=""
                >
                    J
                </Avatar>
                <Typography sx={{marginY: 2}}>Jay Minglez</Typography>
                <Link sx={{color: 'green', fontSize: '14px'}}>Edit Profile</Link>
            </Box>
        </Box>
    );
};

export default RightbarProfile;