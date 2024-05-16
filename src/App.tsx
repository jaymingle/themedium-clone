import {Box, Stack} from "@mui/material";
import './App.css';
import Navbar from "./components/Navbar.tsx";
import Posts from "./components/Posts.tsx";
import Rightbar from "./components/Rightbar.tsx";
import RandomNotice from "./components/elements/RandomNotice.tsx";

function App() {

  return (
    <Box>
        <Navbar/>
        <RandomNotice />
        <Stack sx={{marginX:{xs:0, sm: 5, md: 10, lg: 30}}} spacing={10} direction="row">
            <Posts/>
            <Rightbar/>
        </Stack>
    </Box>
  )
}

export default App
