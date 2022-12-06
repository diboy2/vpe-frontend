import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import PrePhysicalExamination from "../components/pre-physical-exam/index";
import PhysicalExamination from "../components/physical-exam/index";
import PostPhysicalExamination from "../components/post-physical-exam/index";
import { useRouter } from 'next/router'
const steps = ['Pre Physical Examination', 'Physical Examination', 'Post Physical Examination'];

export default function PhysicalExamWorkflow() {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleRestart = () => {
    router.push("./");
  };

  return (
    <> 
      <Stepper activeStep={activeStep} sx={{ width: '100%', height:"10vh" }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box  sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        pt: 2, 
        overflow: "auto", 
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }} >
        { activeStep === 0 && <PrePhysicalExamination/>}
        { activeStep === 1 && <PhysicalExamination />}
        { activeStep === 2 && <PostPhysicalExamination />}
      </Box>
      <Box sx={{ height:"10vh", width: "100%" }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleRestart}
                sx={{ mr: 1 }}
                variant="outlined"
            >
                Restart
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            { activeStep < steps.length - 1 && 
              <Button onClick={handleNext} variant="outlined">
                Next
              </Button>
            }
            
          </Box>
      </Box>
    </>
  );
}

