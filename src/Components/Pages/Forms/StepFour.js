import {
  Checkbox,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
import StepFourSubCategories from "./StepFourSubCategories";
import SubStepFour from "./SubStepFour";

const StepFour = ({ formData, setForm, navigation, methods, register }) => {
  const [values, setValues] = useState('');
  const [values2, setValues2] = useState('');

  
  const handleExtra = (event) => {
  // if(event.target.value == 1){
  //   console.log("hello")
  // }
const getUser = event.target.value
setValues(getUser)
  console.log("hiiiiiiiiiii" ,getUser)
    // 👇️ toggle shown state
    // setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const { control } = useFormContext();
  const { 
    adAddAnoterDriver,
adAddComents, adGiveConsentTerm ,

    ayTitle,
    ayName,
    aySurName,
    ayRealation,
    ayBirthDate,
    ayMarital,
    ayEmployStatus,
    ayEmployedOccupation,
    ayEmployedBusiness,
    ayTypeLicence,
    ayPeriodLicence,
    ay3yearLicenceObtain,
    ayDrivingLicence,
    ayMedicalCondition,
    ayBorkUk,
    ayWhereResidentUk,
    ayUseOtherVehicle,
    ayMotoAciedent, ayMotorDisqualification,
    aydeType,
    aydeDate,
    aydeDamage,
    aydeCost,
    aydeFaults,aydeInjuries,
    aydeType2,aydeDate2, aydeDamage2,
    aydeCost2,aydeFaults2,aydeInjuries2,
    aydeType3, aydeDate3,aydeDamage3,aydeCost3,
    aydeFaults3, aydeInjuries3,
    
    aydeConvection,aydeDateConvection, aydePoints, aydeFine, aydeBan,
    aydeConvection2,aydeDateConvection2, aydePoints2, aydeFine2, aydeBan2,
    aydeConvection3,aydeDateConvection3, aydePoints3, aydeFine3, aydeBan3
  } = formData;
const toggel = () => {
  return (
    <div>
      hello
    </div>
  )
}

  return (
    <>

 
     
       <div className="row">
        <label className="d-flex col-4" >
        Would you like to add another additional driver?   
        </label>
        <Controller
          control={control}
          name="adAddAnoterDriver"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
              onChange={handleExtra}
            >
              <option>---select---</option>
              {adAddAnoterDriver &&
                adAddAnoterDriver.map((h, i) => (
                  <option key={i} value={h.adAddAnoterDriver}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      {
        values =="Yes" && <SubStepFour
        ayTitle={ayTitle}
        ayName={ayName}
        aySurName={aySurName}
        ayRealation={ayRealation}
        ayBirthDate={ayBirthDate}
        ayMarital={ayMarital}
        ayEmployStatus={ayEmployStatus}
        ayEmployedOccupation={ayEmployedOccupation}
        ayEmployedBusiness={ayEmployedBusiness}
        ayTypeLicence={ayTypeLicence}
        ayPeriodLicence={ayPeriodLicence}
        ay3yearLicenceObtain={ay3yearLicenceObtain}
        ayDrivingLicence={ayDrivingLicence}
        ayMedicalCondition={ayMedicalCondition}
        ayBorkUk={ayBorkUk}
        ayWhereResidentUk={ayWhereResidentUk}
        ayUseOtherVehicle={ayUseOtherVehicle}
        ayMotoAciedent={ayMotoAciedent} ayMotorDisqualification={ayMotorDisqualification}
        
        aydeType={aydeType}
    aydeDate={aydeDate}
    aydeDamage={aydeDamage}
    aydeCost={aydeCost}
    aydeFaults={aydeFaults} aydeInjuries={aydeInjuries}
    aydeType2={aydeType2}
    aydeDate2={aydeDate2} aydeDamage2={aydeDamage2}
    aydeCost2={aydeCost2}aydeFaults2={aydeFaults2}aydeInjuries2={aydeInjuries2}
    aydeType3={aydeType3} aydeDate3={aydeDate3}aydeDamage3={aydeDamage3}aydeCost3={aydeCost3}
    aydeFaults3={aydeFaults3} aydeInjuries3={aydeInjuries3}

    
    aydeConvection ={aydeConvection} aydeDateConvection ={aydeDateConvection} 
    aydePoints={aydePoints} aydeFine={aydeFine} aydeBan={aydeBan}
    aydeConvection2={aydeConvection2} aydeDateConvection2={aydeDateConvection2} 
    aydePoints2={aydePoints2} aydeFine2={aydeFine2} aydeBan2={aydeBan2}
    aydeConvection3={aydeConvection3} aydeDateConvection3={aydeDateConvection3} 
    aydePoints3={aydePoints3} aydeFine3={aydeFine3} aydeBan3={aydeBan3}
    
        />
      }
  

  

      <div className="row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
          Additional Comments :
        </label>
        <Controller
          control={control}
          name="adAddComents"
          render={({ field }) => (
              <TextField
           
              className="col-4"
              multiline
              rows={4}
              defaultValue=""
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
          Do you give me the consent to agree to our 'Terms & Conditions' on
          your behalf however, i will send you that to you in an hour with a
          link by text or email? (Office Use Only) : *
        </label>
        <Controller
          control={control}
          name="adGiveConsentTerm"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {adGiveConsentTerm &&
                adGiveConsentTerm.map((h, i) => (
                  <option key={i} value={h.adGiveConsentTerm}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>
   <div className="d-flex mt-5 " style={{alignItem: 'center', justifyContent: "center"}}>
   <Checkbox label='I agree to the Terms and Conditions' />
      <label className="mt-2">I Agree Terms & Conditions and Privacy Policy</label>
   </div>
    </>
  );
};

export default StepFour;
