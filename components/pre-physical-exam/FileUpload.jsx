import React from "react";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import ImgMediaCard from "./ImageMedia";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
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
        <Grid container display="flex" backgroundColor="lightgray">
            <Grid item xs={8} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                flexDirection="column" 
                padding="16px"
            >
                <ImgMediaCard
                    onFileUpload={onFileUpload}
                />
            </Grid>
            <Grid item xs={4} padding="16px" display="flex">
                <Card height="100%" sx={{ flex: 1 }}>
                    <CardContent>
                        Images
                        <List>
                            {
                                images.length == 0
                                ? <Icon /> 
                                : images.map((image) => {
                                    const { uri, text } = image;
                                    return (
                                        <ListItem>
                                            <ListItemText
                                                primary={`${text}`}
                                            />
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </CardContent> 
                </Card>
                
            </Grid>
        </Grid>
    );
};

export default FileUpload