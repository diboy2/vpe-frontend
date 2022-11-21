import * as React from 'react';
import Grid from '@mui/material/Grid';
import Start from '../components/start/index';

export default function() {
    return (
        <Grid item xs={11} sx={{ height: "100vh", padding: "16px", width: "100%" }}>
            <Start/>
        </Grid>
    )
}