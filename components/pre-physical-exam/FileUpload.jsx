import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import FileList from "./FileList";
import FileMedia from "./FileMedia";

const FileUpload = () => {
    const [ fileTypeToggle, setFileTypeToggle ] = useState("image");
    
    return (
        <Grid container display="flex" backgroundColor="lightgray" justifyContent="center">
            <Grid item xs={10} display="flex" padding="16px">
                <Card height="100%" sx={{ flex: 1, display: "flex", flexDirection: "column", width:"100%"}}>
                <Grid container sx={{  display: "flex", flexDirection: "row" }}> 
                    <FileMedia
                        fileTypeToggle={fileTypeToggle}
                    />
                    <Grid item xs={5} sx={{ display: "flex", flexDirection: "column" }}>
                            <FileList fileTypeToggle={fileTypeToggle} />
                            <CardActions  disableSpace={true} sx={{ padding: "0px" }}>
                                <BottomNavigation showLabels={true} value={fileTypeToggle} sx={{ width: "100%" }} >
                                    <BottomNavigationAction
                                        value="image"
                                        label="Images"
                                        icon={<ImageIcon />}
                                        sx={{ flex: 1 }}
                                        onClick={() => setFileTypeToggle("image")}
                                    />
                                    <BottomNavigationAction
                                        value="video"
                                        label="Videos"
                                        icon={<VideoLibraryIcon />}
                                        sx={{ flex: 1 }}
                                        onClick={() => setFileTypeToggle("video")}
                                    />
                                </ BottomNavigation>
                            </CardActions>
                     </Grid>
                    </Grid>
                    
                </Card>
                
            </Grid>
        </Grid>
    );
};

export default FileUpload