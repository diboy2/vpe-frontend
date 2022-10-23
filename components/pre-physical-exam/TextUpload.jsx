import React, { useState } from "react";
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
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Icon from "@mui/material/Icon";
import TextField from '@mui/material/TextField';
import { useVPEContext } from "../../context/VPEContext";

const TextUpload = () => {
    const { 
        state: {
            patientConcerns,
            medicalHistory,
            dailyMetrics
        }, 
        action:{ 
            setPatientConcerns,
            setMedicalHistory,
            setDailyMetrics
        } 
    } = useVPEContext();
    const [text, setText] = useState("");
    const addText = async (url) => {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ text })
        });
        if(response.ok) {
            return await response.text()
        }
        return ""
    };
    const addPatientConcern = async () => {
        const uri = await addText("/api/upload/patient-concerns");
        setPatientConcerns(
            [
                ...patientConcerns,
                {
                    uri,
                    text
                }
            ]
        );
        setText("");   
    };
    const addMedicalHistory = async () => {
        const uri = await addText("/api/upload/medical-history");
        setMedicalHistory(
            [
                ...medicalHistory,
                {
                    uri,
                    text
                }
            ]
        );
        setText("");   
    };
    const addDailyMetric = async () => {
        const uri = await addText("/api/upload/daily-metrics");
        setDailyMetrics(
            [
                ...dailyMetrics,
                {
                    uri,
                    text
                }
            ]
        );
        setText("");   
    };
    
    return (
        <Grid container display="flex">
            <Grid item xs={8} backgroundColor="gray"  padding="16px"    >
                <Card >
                    <CardContent>
                        <FormControl fullWidth={true}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline={true}
                                rows={4}
                                value={text}
                                onChange={(event) => {
                                    setText(event.target.value)
                                }}
                            />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Stack spacing={2} direction="row-reverse">
                            <Button size="small" variant="contained">Add Daily Metrics</Button>
                            <Button size="small" variant="contained" onClick={addPatientConcern}>Add Patient Concerns</Button>
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
                        {
                            dailyMetrics.length == 0
                            ? <Icon /> 
                            : dailyMetrics.map((dailyMetric) => {
                                return (
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"
                                        />
                                    </ListItem>
                                );
                                })
                        }
                    </Grid>
                    <Grid item xs={12} >
                        Patient Concerns
                        <List>
                            {
                                patientConcerns.length == 0
                                ? <Icon /> 
                                : patientConcerns.map((patientConcern) => {
                                    return (
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${patientConcern}`}
                                            />
                                        </ListItem>
                                    );
                                 })
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} >
                        Medical History
                        {
                                medicalHistory.length == 0
                                ? <Icon /> 
                                : medicalHistory.map((history) => {
                                    return (
                                        <ListItem>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Single-line item"
                                            />
                                        </ListItem>
                                    );
                                 })
                            }
          
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        
    );
};

export default TextUpload