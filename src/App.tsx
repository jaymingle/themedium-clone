import {Box, Stack} from "@mui/material";
import './App.css';
import Navbar from "./components/Navbar.tsx";
import Posts from "./components/Posts.tsx";
import Rightbar from "./components/Rightbar.tsx";

function App() {

  return (
    <Box>
        <Navbar/>
        <Stack sx={{}} spacing={10} direction="row">
            <Posts/>
            <Rightbar/>
        </Stack>
    </Box>
  )
}

export default App
