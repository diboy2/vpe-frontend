import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
    const truncate = (input) => input.length > 12 ? `${input.substring(0, 12)}...` : input;
    const addPatientConcern = async () => {
        const uri = await addText("/api/upload/patient-concerns");
        setPatientConcerns(
            [
                ...patientConcerns,
                {
                    uri,
                    text: truncate(text)
                }
            ]
        );
        setText("");   
    };
    const addMedicalHistory = async () => {
        const uri = await addText("/api/upload/medical-history");
        text = 
        setMedicalHistory(
            [
                ...medicalHistory,
                {
                    uri,
                    text: truncate(text)
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
                    text: truncate(text)
                }
            ]
        );
        setText("");   
    };
    
    return (
        <Grid container display="flex" flexGrow="1">
            <Grid item xs={8} backgroundColor="lightgray" padding="16px" display="flex"   >
                <Card height="100%" sx={{ flex: 1}}>
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
                            <Button size="small" variant="contained" onClick={addDailyMetric}>Add Daily Metrics</Button>
                            <Button size="small" variant="contained" onClick={addPatientConcern}>Add Patient Concerns</Button>
                            <Button size="small" variant="contained" onClick={addMedicalHistory }>Add Medical History</Button>
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4} padding="16px"  display="flex" backgroundColor="lightgray" >
                <Card height="100%" sx={{ flex: 1}}>
                    <CardContent>
                        <FormControl fullWidth={true}>
                            <Grid container >
                                <Grid item xs={12}  >
                                    Daily Metrics
                                    <List>
                                        {
                                            dailyMetrics.length == 0
                                            ? <Icon /> 
                                            : dailyMetrics.map((dailyMetric) => {
                                                const { uri, text } = dailyMetric;
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
                                </Grid>
                                <Grid item xs={12} >
                                    Patient Concerns
                                    <List>
                                        {
                                            patientConcerns.length == 0
                                            ? <Icon /> 
                                            : patientConcerns.map((patientConcern) => {
                                                const { uri, text } = patientConcern;
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
                                </Grid>
                                <Grid item xs={12} >
                                    Medical History
                                    {
                                            medicalHistory.length == 0
                                            ? <Icon /> 
                                            : medicalHistory.map((history) => {
                                                const { uri, text } = history;
                                                return (
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={`${text}`}
                                                        />
                                                    </ListItem>
                                                );
                                            })
                                        }
                    
                                </Grid>
                            </Grid>
                        </FormControl>
                    </CardContent> 
                </Card>
            </Grid>
            
        </Grid>
        
    );
};

export default TextUpload