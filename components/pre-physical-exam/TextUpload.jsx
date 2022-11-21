import React, { useState } from "react";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import PreTextList from './PreTextList.jsx'; 
import { useVPEContext } from "../../context/VPEContext";
import { medicalHistoryData, patientConcernsData, dailyMetricsData } from "../../util/defaultData";
import { addText } from "../../util/save.js";
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
    // const truncate = (input) => input.length > 12 ? `${input.substring(0, 12)}...` : input;
    
    return (
        <Grid container display="flex" flexGrow="1" backgroundColor="lightgray" justifyContent="center">
            <Grid item md={8} xs={12} padding="16px"  display="flex" height="100%" >
                <Card height="100%" sx={{ flex: 1 }}>
                    <CardContent sx={{ height: "100%"}}>
                        <PreTextList 
                            header="Daily Metrics"
                            preTextContent={dailyMetrics}
                            initialTextValue={dailyMetricsData.join(" , ")}
                            addTextContent={
                                async (text) => {
                                    const uri = await addText("/api/upload/daily-metrics", text);
                                    dailyMetrics.push({ uri, text})
                                    setDailyMetrics(dailyMetrics); 
                                }
                            }
                        />    
                        <PreTextList 
                            header="Patient Concerns"
                            preTextContent={patientConcerns}
                            initialTextValue={patientConcernsData.join(" , ")}
                            addTextContent={
                                async (text) => {
                                    const uri = await addText("/api/upload/patient-concerns", text);
                                    patientConcerns.push({ uri, text})
                                    setPatientConcerns(patientConcerns);
                                }
                            }
                            
                        />
                        <PreTextList 
                            header="Medical History"
                            preTextContent={medicalHistory}
                            initialTextValue={medicalHistoryData.join(" , ")}
                            addTextContent= {
                                async (text) => {
                                    const uri = await addText("/api/upload/medical-history", text);
                                    medicalHistory.push({ uri, text })
                                    setMedicalHistory(medicalHistory);  
                                }
                            }
                        />
                    </CardContent> 
                </Card>
            </Grid>  
        </Grid>
    );
};

export default TextUpload