import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
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
import PreTextList from './PreTextList.jsx'; 
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
        patientConcerns.push({ uri, text: truncate(text)})
        setPatientConcerns(patientConcerns);
        setText(""); 
    };
    const addMedicalHistory = async () => {
        const uri = await addText("/api/upload/medical-history");
        medicalHistory.push({ uri, text: truncate(text)})
        setMedicalHistory(medicalHistory);
        setText("");     
    };
    const addDailyMetric = async () => {
        const uri = await addText("/api/upload/daily-metrics");
        dailyMetrics.push({ uri, text: truncate(text)})
        setDailyMetrics(dailyMetrics);
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
            <Grid item xs={4} padding="16px"  display="flex" height="100%" >
                <Card height="100%" sx={{ flex: 1}}>
                    <CardContent sx={{ height: "100%"}}>
                        <Grid container  sx={{ flex: 1, display:"flex", height: "100%"}}>
                            <PreTextList 
                                header="Daily Metrics"
                                preTextContent={dailyMetrics}
                            />
                            <PreTextList 
                                header="Patient Concerns"
                                preTextContent={patientConcerns}
                            />
                            <PreTextList 
                                header="Medical History"
                                preTextContent={medicalHistory}
                            />
                            
                        </Grid>
                    </CardContent> 
                </Card>
            </Grid>  
        </Grid>
    );
};

export default TextUpload