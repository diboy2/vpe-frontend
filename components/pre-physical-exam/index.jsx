import React from "react";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FileUpload from "./FileUpload.jsx";
import TextUpload from "./TextUpload.jsx";


const PrePhysicalExamination = () => {
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', height:'100%' }} >
            <Tabs value={value} onChange={handleChange} centered={true}>
                <Tab label="Text Upload" value="zero" />
                <Tab label="File Upload" value="one"/>
            </Tabs>
            { value == "zero" && <TextUpload />}

            { value == "one" && <FileUpload />}
        </Box>
        
    )
};

export default PrePhysicalExamination