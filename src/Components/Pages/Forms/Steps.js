import React, { useEffect, useState } from 'react';
import './Fstyle.css'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, TextField } from '@mui/material';
import {  useStep } from 'react-hooks-helper';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {useForm , useFormContext , FormProvider, Controller, } from 'react-hook-form';
import { defaultData } from './Common';
import StepOne from './StepOne';
import StepFour from './StepFour';

import axios from 'axios'
import { Link } from "react-router-dom";

// const steps = 
// ['Select campaign settings', 
// 'Create an ad group', 
// 'Create an ad'];

//case field


const steps = [
  "Vehicle Info",
  'Personal Info',
  'Driving Info',
  'Named Drivers'
 

];
  
  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       return (
  //         <>
  //           <TextField
  //             id="first-name"
  //             label="First Name"
  //             variant="outlined"
  //             placeholder="Enter Your First Name"
  //             fullWidth
  //             margin="normal"
  //             name="firstName"
  //           />
  //           <TextField
  //             id="last-name"
  //             label="Last Name"
  //             variant="outlined"
  //             placeholder="Enter Your Last Name"
  //             fullWidth
  //             margin="normal"
  //             name="lastName"
  //           />
  //           <TextField
  //             id="nick-name"
  //             label="Nick Name"
  //             variant="outlined"
  //             placeholder="Enter Your Nick Name"
  //             fullWidth
  //             margin="normal"
  //             name="nickName"
  //           />
  //         </>
  //       );
  
  //     case 1:
  //       return (
  //         <>
  //           <TextField
  //             id="email"
  //             label="E-mail"
  //             variant="outlined"
  //             placeholder="Enter Your E-mail Address"
  //             fullWidth
  //             margin="normal"
  //             name="emailAddress"
  //           />
  //           <TextField
  //             id="phone-number"
  //             label="Phone Number"
  //             variant="outlined"
  //             placeholder="Enter Your Phone Number"
  //             fullWidth
  //             margin="normal"
  //             name="phoneNumber"
  //           />
  //           <TextField
  //             id="alternate-phone"
  //             label="Alternate Phone"
  //             variant="outlined"
  //             placeholder="Enter Your Alternate Phone"
  //             fullWidth
  //             margin="normal"
  //             name="alternatePhone"
  //           />
  //         </>
  //       );
  //     case 2:
  //       return (
  //         <>
  //           <TextField
  //             id="address1"
  //             label="Address 1"
  //             variant="outlined"
  //             placeholder="Enter Your Address 1"
  //             fullWidth
  //             margin="normal"
  //             name="address1"
  //           />
  //           <TextField
  //             id="address2"
  //             label="Address 2"
  //             variant="outlined"
  //             placeholder="Enter Your Address 2"
  //             fullWidth
  //             margin="normal"
  //             name="address2"
  //           />
  //           <TextField
  //             id="country"
  //             label="Country"
  //             variant="outlined"
  //             placeholder="Enter Your Country Name"
  //             fullWidth
  //             margin="normal"
  //             name="country"
  //           />
  //         </>
  //       );
  //     case 3:
  //       return (
  //         <>
  //           <TextField
  //             id="cardNumber"
  //             label="Card Number"
  //             variant="outlined"
  //             placeholder="Enter Your Card Number"
  //             fullWidth
  //             margin="normal"
  //             name="cardNumber"
  //           />
  //           <TextField
  //             id="cardMonth"
  //             label="Card Month"
  //             variant="outlined"
  //             placeholder="Enter Your Card Month"
  //             fullWidth
  //             margin="normal"
  //             name="cardMonth"
  //           />
  //           <TextField
  //             id="cardYear"
  //             label="Card Year"
  //             variant="outlined"
  //             placeholder="Enter Your Card Year"
  //             fullWidth
  //             margin="normal"
  //             name="cardYear"
  //           />
  //         </>
  //       );
  //     default:
  //       return "unknown step";
  //   }
  // }

export default function Steps() {
  // const [formData, setForm] = useForm(defaultData);
  const [formData, setFormData] = useState(defaultData);

  console.log("formdata", formData)
  const methods =useForm({formData})
  console.log("method", methods)
  const {register ,handleSubmit} =useForm()
  const props = { formData, register };
  const { step, navigation } = useStep({

    steps,
    initialStep: 0,
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
// const methods =useForm(defaultData)
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

 
  const handleNext = async (data) => {
    if (activeStep == steps.length - 1){
      try{
        return await axios.post("/create", data
        )
        .then((response) => (console.log(response)),
  setActiveStep(activeStep +1),
  );
      } catch(error){
  console.log('Error while calling', error)
      }
    }
   
   else{
    setActiveStep(activeStep +1);
    setSkipped(skipped.filter((skipItem) => skipItem !==activeStep))

   }
    //   let newSkipped = skipped;
    //   if (isStepSkipped(activeStep)) {
    //     newSkipped = new Set(newSkipped.values());
    //     newSkipped.delete(activeStep);
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);

  
    // }

  };




  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

 
  function getStepContent(step){
  switch (step) {
    case 0:
      return <StepOne {...props} />;
    case 1:
      return <StepTwo {...props}/>
    case 2:
      return <StepThree {...props} />;
      case 3:
        return <StepFour {...props} />;
        // case 5:
        //   return <StepThree {...props} />;
 
  }
  }

  // const onSubmit =(data) =>{
  //   console.log("data done", data)
  // }
  return (
    <>
     
    <Container>
    <h1 className='insuTitle'>   Vehicle Insurance Form</h1>
        <Box sx={{ width: '100%' }}>
   
      <Stepper activeStep={activeStep} sx={{ mt: 4 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography
         
          sx={{ mt: 2, mb: 1 }}>
            <div style={{justifyContent: 'center', alignItem:'center'}}>
            <h3 style={{textAlign: 'center'}}>Thanks for submitting!

One of our representatives will call you in the next
 4/5 business hours with the cheapest deal available for you.</h3>

            </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
         
          <FormProvider {...methods}>
          <form 
          className='wholeForm'
          onSubmit={methods.handleSubmit(handleNext)}
          
          >{getStepContent(activeStep)}
         
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              className='btn  text-dark font-weight-bold'
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button 
              className='btn  text-dark font-weight-bold'
              color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button 
            type='submit'
            variant='contained'
            color='primary'
            className='btn  text-dark font-weight-bold'
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
          </form>
          </FormProvider>
         
        </React.Fragment>
      )}
    </Box>
    </Container>
{/* <Link to="/payment">

<Button>Payment</Button>
</Link> */}
   
    </>
  );
}

// export default StepOne;