import React from "react";
import Card from '@mui/material/Card';
import FolderIcon from '@mui/icons-material/Folder';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { CardContent, CardHeader } from "@mui/material";



const TextUpload = () => {
    return (
        <Grid container   
            display="flex" 
            alignItems="center"
            sx={{
                height: "100%"
            }}
        >
            <Grid item xs={12} height="30%"  >
                <Card height="100%">
                    <CardHeader title="Daily Metrics" />
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>     
            </Grid>
            <Grid item xs={12} height="30%" >
                <Card height="100%">
                    <CardHeader title="Medical History" />
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} height="30%" >
                <Card height="100%">
                    <CardHeader title="Patient Concerns" />
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Single-line item"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default TextUpload