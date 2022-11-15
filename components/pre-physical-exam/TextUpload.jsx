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
import Typography from '@mui/material/Typography';
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
        <Grid container display="flex" flexGrow="1" backgroundColor="lightgray">
            <Grid item xs={8} padding="16px" display="flex">
                <Card height="100%"  sx={{ flex: 1, display: "flex", flexDirection: "column", width:"100%"}}>
                    <CardContent sx={{ flex: 1, display: "flex" }}>

                        <TextField
                            fullWidth
                            value={text}
                            onChange={(event) => {
                                setText(event.target.value)
                            }}
                            multiline={true}
                            rows = {10}
                        />                
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
            <Grid item xs={4} padding="16px"  display="flex" >
                <Card height="100%" sx={{ flex: 1}}>
                    <CardContent>
                        <FormControl fullWidth={true}>
                            <Grid container >
                                <Grid item xs={12}  >
                                    <Typography align="center">
                                        Daily Metrics
                                    </Typography>
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
                                    <Typography align="center">
                                        Patient Concerns
                                    </Typography>
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
                                    <Typography align="center">
                                        Medical History
                                    </Typography>
                                    <List>
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
                                    </List>
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