import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from "@mui/material/LinearProgress"

const PostPhysicalExamination = () => { 

    return (
        <Grid container display="flex" height="100%">
            <Box sx={{ width: '100%', height:'100%' }}>
                <LinearProgress />
            </Box>
        </Grid>
    )
};

export default PostPhysicalExamination