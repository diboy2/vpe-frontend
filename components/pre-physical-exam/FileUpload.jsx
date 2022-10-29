import React from "react";
import Chip from "@mui/material/Chip";
import Paper from '@mui/material/Paper';
import ImgMediaCard from "./ImageMedia";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

const FileUpload = () => {
    
    return (
        <Grid container display="flex">
            <Grid item xs={8} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                flexDirection="column" 
                backgroundColor="gray" 
                padding="16px">
                <ImgMediaCard />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h3">
                    Files
                </Typography>
                <Chip label="Small" size="small" />
                <Divider />
                <Typography>

                </Typography>

            </Grid>
        </Grid>
    );
};

export default FileUpload