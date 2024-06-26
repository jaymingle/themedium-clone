import {createTheme} from "@mui/material";
import {purple} from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        primary: {
            main: '#fff'
        },
        secondary:{
            main: purple[500],
            light: '#90caf9'
        },
    }
})