import React from "react";
import CardContent from "@mui/material/CardContent";
import Divider from '@mui/material/Divider';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography';

import { useVPEContext } from "../../context/VPEContext";

const FileList = ({ fileTypeToggle }) => {
    const { 
        state: {
            images,
            videos
        }
    } = useVPEContext();

    return (
        <CardContent sx={{ flex: 1 }} >
            <Typography align="center">
                {fileTypeToggle === "image" && "Image Content"}
                {fileTypeToggle === "video" && "Video Content"}
            </Typography>
            <Divider />
            <List>
                {fileTypeToggle === "image" && images && images.map((image) => {
                        const { uri, text } = image;
                        return (
                            <ListItem key={uri}>
                                <ListItemText
                                    primaryTypographyProps={{ 
                                        textOverflow: "ellipsis", 
                                        whiteSpace: "nowrap", 
                                        width: "100%", 
                                        overflow: "hidden"
                                    }}
                                    primary={`${text}`}
                                />
                            </ListItem>
                        );
                    })
                }
                {fileTypeToggle === "video" && videos && videos.map((video) => {
                        const { uri, text } = video;
                        return (
                            <ListItem key={uri}>
                                <ListItemText
                                    primaryTypographyProps={{ 
                                        textOverflow: "ellipsis", 
                                        whiteSpace: "nowrap", 
                                        width: "100%", 
                                        overflow: "hidden"
                                    }}
                                    primary={`${text}`}
                                />
                            </ListItem>
                        );
                    })
                }
            </List>
        </CardContent>
    )
};

export default FileList;
