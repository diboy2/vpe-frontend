import * as React from 'react';
import Grid from '@mui/material/Grid';
import Start from '../components/start/index';

export default function() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={11} sx={{ height: "100vh", padding: "16px" }}>
                <Start/>
            </Grid>
            
        </Grid>
    )
}