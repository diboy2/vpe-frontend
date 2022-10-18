import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FileUpload from "./FileUpload.jsx";
import Paper from '@mui/material/Paper';
const PrePhysicalExamination = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <Tabs value={value} onChange={handleChange} centered={true}>
                <Tab label="Text Upload" />
                <Tab label="File Upload" />
            </Tabs>
            <Paper height="500">
                <FileUpload />
            </Paper>
        </>
        
    )
};

export default PrePhysicalExamination