import {Box} from "@mui/material";
import './App.css';
// import Home from "./components/routes/Home";
import Profile from "./components/routes/Profile.tsx";
import PageNotFound from "./components/routes/PageNotFound.tsx";
// import AppLanding from "./components/routes/AppLanding.tsx";

function App() {

  return (
    <Box>
        {/*<Home/>*/}
        {/*<Profile/>*/}
        <PageNotFound/>
        {/*<AppLanding/>*/}
    </Box>
  )
}

export default App
