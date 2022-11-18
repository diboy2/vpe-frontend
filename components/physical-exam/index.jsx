import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useVPEContext } from "../../context/VPEContext";

const steps = [
  {
    key: "vitalSigns",
    label: 'Vital Signs'
  },
  {
    key: "skin",
    label: 'Skin'
  },
  {
    key: "headSenses",
    label: 'Head and Senses'
  },
  {
    key: "neck",
    label: 'Neck'
  },
  {
    key: "lungs",
    label: 'Lungs'
  },
  {
    key: "heart",
    label: 'Heart'
  },
  {
    key: "abdomen",
    label: 'Abdomen'
  },
  {
    key: "extremities",
    label: 'Extremities'
  },
  {
    key: "neuro",
    label: 'Neurological'
  },
  {
    key: "social",
    label: 'Social Determinants of Health'
  }
];

const PhysicalExamination = () =>  {
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const { 
      state: {
        physicianNotes
      }, 
      action:{ 
        setPhysicianNotes
      } 
  } = useVPEContext();
  const addPhysicianNote = async (text) => {
    const response = await fetch("/api/upload/physician-notes",{
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
  const handleNext = async () => {
    const key = steps[activeStep].key;
    physicianNotes[key].state = "loading"
    setPhysicianNotes(physicianNotes);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    physicianNotes[key].uri= await addPhysicianNote(
      `${steps[activeStep].label} Assessment: ` +
      physicianNotes[key].text
    );
    physicianNotes[key].state = "success";
    setPhysicianNotes(physicianNotes);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  

  return (
    <Grid container display="flex" >
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ width: "100%"}}>
        {steps.map((step, index) => (
          <Step key={step.label} width="100%">
            <StepLabel
              optional={
                index === steps.length-1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
              {physicianNotes[step.key].state === "success" &&
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                </Alert>
              }
              {physicianNotes[step.key].state === "loading" && 
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              }
            </StepLabel>
            
              <StepContent width="100%">
                {isLoading ? 
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
                :
                  <>
                    <FormControl fullWidth={true}>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Enter your notes for this examination phase"
                        value={physicianNotes[step.key].text}
                        onChange={(event) => {
                          physicianNotes[step.key].text = event.target.value;
                          setPhysicianNotes(physicianNotes);
                        }}
                      />
                    </FormControl>
              
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                      </div>
                    </Box>
                  </>
                }
              </StepContent>
            
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Grid>
  );
};

export default PhysicalExamination