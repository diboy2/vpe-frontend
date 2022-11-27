import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from '@mui/material/Divider';
import ImgMediaCard from "./ImageMedia";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useVPEContext } from "../../context/VPEContext";

const FileUpload = () => {
    const { 
        state: {
            images,
        }, 
        action:{ 
            setImages
        } 
    } = useVPEContext();

    const onFileUpload = async (file) => {
        const body = new FormData();
        body.append("file", file);
        const response = await fetch("/api/upload/image",{
            method: "POST",
            body
        });
        if(response.ok) {
            const uri = await response.text();
            setImages([
                ...images,
                {
                    uri,
                    text: file.name
                }
            ]);
        } else {
            console.error("Unable to Upload file")
        }
        
    };
    return (
        <Grid container display="flex" backgroundColor="lightgray" justifyContent="center">
            <Grid item xs={10} display="flex" padding="16px">
                <Card height="100%" sx={{ flex: 1, display: "flex", flexDirection: "column", width:"100%"}}>
                <Grid container  sx={{  display: "flex", flexDirection: "row" }}> 
                    <ImgMediaCard
                        onFileUpload={onFileUpload}
                    />
                    <Grid item xs={5} sx={{ display: "flex", flexDirection: "column" }}>
                        <Paper  elevation={3} square={true} sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
                        <CardContent sx={{ flex: 1 }} >
                            <Typography align="center">
                                Image Content
                            </Typography>
                            <Divider />
                            <List>
                                {
                                    images.length == 0
                                    ? <Icon /> 
                                    : images.map((image) => {
                                        const { uri, text } = image;
                                        return (
                                            <ListItem key={uri}>
                                                <ListItemText
                                                    primary={`${text}`}
                                                />
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </CardContent>
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