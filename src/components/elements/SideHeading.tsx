import React from 'react';
import {Box, Typography} from "@mui/material";

interface Prop {
    heading: string
}

const SideHeading: React.FC<Prop> = ({heading}) => {
    return (
        <Box>
            <Typography variant="h6" sx={{marginTop: 5, paddingY: 2, fontSize: "18px"}}>{heading}</Typography>
        </Box>
    );
};

export default SideHeading;