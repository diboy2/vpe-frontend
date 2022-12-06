import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputAdornment from '@mui/material/InputAdornment';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";

const PreTextList = ({
    defaultExpanded,
    header,
    preTextContent,
    initialTextValue,
    addTextContent
}) => {
    const [text, setText] = useState(initialTextValue);
    return (
            <Accordion defaultExpanded={defaultExpanded} sx={{ width: "100%" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography align="center">
                        {header}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ overflowY: "auto", height: "100%"}}>
                        {
                            preTextContent.map((contentItem) => {
                                const { uri, text } = contentItem;
                                return (
                                    <ListItem key={uri}>
                                        <ListItemText
                                            primary={`${text}`}
                                            sx={{ textOverflow: "ellipsis"}}
                                        />
                                    </ListItem>
                                );
                            })
                        }
                    </List>
                    
                    <TextField
                        fullWidth
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={async () => { await addTextContent(text); setText("");}}>
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </InputAdornment>
                                )
                        }}
                    />
                </AccordionDetails>
            </Accordion>
             
    );
};

export default PreTextList