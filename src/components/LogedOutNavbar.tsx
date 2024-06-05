import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import AppAuth from "./elements/AppAuth.tsx";
import AppAuthWithText from "./elements/AppAuthWithText.tsx";

const LogedOutNavbar = () => {

   const Styles = {
       color: '#000',
       textTransform: 'initial',
       textDecoration: 'none'
   }

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
                <img width={150} height={30}
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/1595px-Medium_%28website%29_logo.svg.png" alt="Medium Logo"/>
                <Box sx={{display: 'flex', gap: 2}}>
                    <Box sx={{display:{xs: 'none', sm: 'none', md: 'block'}}}>

                        <Box sx={{display: 'flex', gap: 2, marginTop: 1}}>
                            <Link style={Styles} to='/story'>Our Story</Link>
                            <Link style={Styles} to='/membership'>Membership</Link>
                        </Box>

                    </Box>
                    <AppAuthWithText theText="Write"/>
                    <AppAuthWithText theText="Sign In"/>
                    <AppAuth theText="Get Started"/>
                </Box>
            </Box>
        </Box>
    );
};

export default LogedOutNavbar;