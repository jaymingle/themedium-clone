import {Box, Link} from "@mui/material";
import React from "react";

type Props ={
    text: string
}

const More: React.FC<Props> = ({text}) => {
    return (
        <Box>
            <Link sx={{color: 'green', '&:hover':{color: '#000'}, marginY: 4, }} underline="none">{text}</Link>
        </Box>
    );
};

export default More;