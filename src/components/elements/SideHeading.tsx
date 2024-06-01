import React from 'react';
import {Typography} from "@mui/material";

interface Prop {
    heading: string
}

const SideHeading: React.FC<Prop> = ({heading}) => {
    return (
        <div>
            <Typography variant="h6" sx={{marginY: "10px", fontSize: "18px"}}>Staff Picks</Typography>
        </div>
    );
};

export default SideHeading;