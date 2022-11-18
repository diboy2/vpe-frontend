import React from "react";
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { useRouter } from 'next/router'


const Start = () => {
    const router = useRouter();
    const handleStart = async () => {
        const response = await fetch("/api/clear/text-recognition-table",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.ok) {
            router.push("replace") // TODO: 
        }
        console.error("Unable to navigate away from start");
    };
    const [value, setValue] = React.useState("zero");

    return (
        <Paper sx={{ 
            width: '100%', 
            height:'100vh', 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" 
        }} >
            <Button variant="contained" onClick={handleStart}>
                Start
            </Button>
        </Paper>
        
    )
};

export default Start