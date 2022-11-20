import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, FormControl } from "@mui/material";
import { useRouter } from 'next/router'


const Start = () => {
    const router = useRouter();
    const handleStart = async () => {
        router.push("./");
        const response = await fetch("/api/clear/text-recognition-table",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            router.push("./") // TODO: 
        }
        console.error("Unable to navigate away from start");
    };
    const [value, setValue] = React.useState("zero");

    return (
        <Paper sx={{ 
            width: '100%',
            height: "100%", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "lightgrey" 
        }} >
            <Card sx={{ maxWidth: 450 }} >
                {/* <CircularProgress /> */}
                <CardHeader
                    title="Physical Examination Prototype"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The prototype follows the workflow expressed in the Colored Petri Nets Model.    
                    </Typography>         
                </CardContent>
                <CardActions>

                        <Button  size="large" onClick={handleStart}>
                            Start Workflow
                        </Button>
                </CardActions>
            </Card>
            
        </Paper>
        
    )
};

export default Start