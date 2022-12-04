import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import ImgMediaCard from "./ImageMedia";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import ImageIcon from '@mui/icons-material/Image';
import FileList from "./FileList";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import { useVPEContext } from "../../context/VPEContext";
import uploadImage from "../../pages/api/upload/image";

const FileUpload = () => {
    const { 
        state: {
            images,
            videos
        }, 
        action:{ 
            setImages,
            setVideos
        } 
    } = useVPEContext();

    
    return (
        <Grid container display="flex" backgroundColor="lightgray" justifyContent="center">
            <Grid item xs={10} display="flex" padding="16px">
                <Card height="100%" sx={{ flex: 1, display: "flex", flexDirection: "column", width:"100%"}}>
                <Grid container  sx={{  display: "flex", flexDirection: "row" }}> 
                    <ImgMediaCard
                        onFileUpload={onImageUpload}
                    />
                    <Grid item xs={5} sx={{ display: "flex", flexDirection: "column" }}>
                        <Paper  elevation={3} square={true} sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
                        <FileList toggle={true} />
                        <CardActions>
                            <BottomNavigation showLabels={true} value={"videos"} sx={{ width: "100%" }} >
                                <BottomNavigationAction
                                    label="Images"
                                    value="images"
                                    icon={<ImageIcon />}
                                    sx={{ flex: 1 }}
                                />
                                <BottomNavigationAction
                                    label="Videos"
                                    value="videos"
                                    icon={<VideoLibraryIcon />}
                                    sx={{ flex: 1 }}
                                />
                            </ BottomNavigation>
                        </CardActions>
                        </Paper>
                     </Grid>
                    </Grid>
                    
                </Card>
                
            </Grid>
        </Grid>
    );
};

export default FileUpload