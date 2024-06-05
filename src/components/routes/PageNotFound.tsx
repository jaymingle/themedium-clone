import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom"
import LogedOutNavbar from "../LogedOutNavbar.tsx";

const PageNotFound = () => {


    return (
        <Box>
            <LogedOutNavbar/>

            <Box sx={{marginX:{xs:0, sm: 2, md: 5, lg: 50}, marginY: 15}}>
                <Stack direction="row" sx={{gap: 5}}>
                    <img height={500} width={500} src="https://cdn-images-1.medium.com/v2/1*8rgW0Qvy2bSGSBMlORMhQA.png" alt="Page Not Found Image"/>
                    <Box>
                        <Typography variant="subtitle1">PAGE NOT FOUND</Typography>
                        <Typography variant="h2" sx={{color: 'grey', fontWeight: 600, fontSize: '180px'}}>404</Typography>
                        <Typography variant="h5" sx={{fontWeight: 400, fontSize: '42px'}}>Out of <br/> nothing, <br/> something.</Typography>
                        <Typography sx={{marginBottom: 5}}>You can find (just about) anything on Medium — <br/> apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?</Typography>
                        <Link style={{color: '#000', textDecoration: 'underline'}} to="/">Home</Link>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default PageNotFound;