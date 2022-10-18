import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from '@mui/material/Paper';
import ImgMediaCard from "./ImageMedia";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
];

const FileUpload = () => {
    
    return (
        <Paper>
            <Grid container display="flex">
                <Grid item xs={9} display="flex" justifyContent="center">
                    <ImgMediaCard />
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                            icon={<SpeedDialIcon />}
                        >
                            {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                            ))}
                        </SpeedDial>
                    <Button size="small">Upload</Button>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h3">
                        Files
                    </Typography>
                    <Chip label="Small" size="small" />
                    <Divider />
                    <Typography>

                    </Typography>

                </Grid>
            </Grid>
        </Paper>
        
    );
};

export default FileUpload