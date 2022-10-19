import React from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FolderIcon from '@mui/icons-material/Folder';
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import { CardContent, CardActions } from "@mui/material";
import TextField from '@mui/material/TextField';
const TextUpload = () => {
    return (
        <Grid container display="flex">
            <Grid item xs={8} backgroundColor="gray"  padding="16px"    >
                <Card >
                    <CardContent>
                        <FormControl fullWidth={true}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                            />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Stack spacing={2} direction="row-reverse">
                            <Button size="small" variant="contained">Add Daily Metrics</Button>
                            <Button size="small" variant="contained">Add Patient Concerns</Button>
                            <Button size="small" variant="contained">Add Medical History</Button>
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}  >
                <Grid container   
                >
                    <Grid item xs={12}  >
                        Daily Metrics
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
                    </Grid>
                    <Grid item xs={12} >
                        Patient Concerns
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
                    </Grid>
                    <Grid item xs={12} >
                        Medical History
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
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        
    );
};

export default TextUpload