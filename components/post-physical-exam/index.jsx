import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import EntityMentionTable from './EntityMentionTable.jsx';
import EntityTable from './EntityTable.jsx';

const PostPhysicalExamination = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [entityMentions, setEntityMentions] = React.useState([]);
    const [entities, setEntities] = React.useState([]);

    React.useEffect(() => {
        const getExaminationSummary = async () => {
            setIsLoading(true)
            const response = await fetch("/api/get/physical-examination-summary",{
                method: "POST"
            });
            if(response.ok) {
                const responseJSON = await response.json();
                setEntities(responseJSON.entities);
                setEntityMentions(responseJSON.entityMentions);
            }
            setIsLoading(false);

        };
        getExaminationSummary();
    },[]);
    
    return (
        <Grid container display="flex" height="100%" justifyContent="center" alignItems="center" width="100%">
            {
                isLoading ? 
                <CircularProgress /> :
                <Grid container direction="row" >
                    <Grid item xs={6}>
                        <EntityMentionTable entityMentions={entityMentions} />
                    </Grid>
                    <Grid item xs={6}>
                        <EntityTable entities={entities} />
                    </Grid> 
                </Grid>
            }
              
        </Grid>
    )
};

export default PostPhysicalExamination