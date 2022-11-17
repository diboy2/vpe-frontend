import React from "react";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import Typography from '@mui/material/Typography';

const PreTextList = ({
    header,
    preTextContent,
}) => {
    return (
        <Grid item xs={12} sx={{ height: "33%"}} >
            <Typography align="center">
                {header}
            </Typography>
            <Divider />
            <List sx={{ overflowY: "auto", height: "100%"}}>
                {
                    preTextContent.length == 0
                    ? <Icon /> 
                    : preTextContent.map((contentItem) => {
                        const { uri, text } = contentItem;
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
    );
};

export default PreTextList