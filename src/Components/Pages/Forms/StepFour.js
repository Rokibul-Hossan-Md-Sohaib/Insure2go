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

const StepFour = ({ formData, setForm, navigation, methods, register }) => {
 
  const { control } = useFormContext();
  const { adAddAnoterDriver, adAddComents, adGiveConsentTerm ,
  
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
    ayMotoAciedent, ayMotorDisqualification
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
       <div  className=" d-flex mr-3">
      
       <label className=""  style={{ marginTop: "10px" , marginRight: '40px'}}>

       Would you like to add another additional driver?       </label >
       <details className="">
            <summary style={{color: 'gray'}}> Extra Additional Driver(optional)</summary>
    
    <h1 className="mt-5">Extra Additionl Driver</h1>
      <hr style={{ color: "black" }}></hr>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Title         </label>
        <Controller
          control={control}
          name="ayTitle"
          render={({ field }) => (
              <TextField
           
              className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Full Name:         </label>
        <Controller
          control={control}
          name="ayName"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              id="ayName"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Surname      </label>
        <Controller
          control={control}
          name="aySurName"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              id="aySurName"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Relationship to Proposer/Policy Holder
        </label>
        <Controller
          control={control}
          name="ayRealation"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayRealation &&
                ayRealation.map((h, i) => (
                  <option key={i} value={h.ayRealation}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Your Date of Birth     </label>
        <Controller
          control={control}
          name="ayBirthDate"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Marital Status
        </label>
        <Controller
          control={control}
          name="ayMarital"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayMarital &&
                ayMarital.map((h, i) => (
                  <option key={i} value={h.ayMarital}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Employment Status
        </label>
        <Controller
          control={control}
          name="ayEmployStatus"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayEmployStatus &&
                ayEmployStatus.map((h, i) => (
                  <option key={i} value={h.ayEmployStatus}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        If employed/Self-employed, what is your occupation    </label>
        <Controller
          control={control}
          name="ayEmployedOccupation"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
      
      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        If employed/self-employed, what type of business   </label>
        <Controller
          control={control}
          name="ayEmployedBusiness"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Type of Licence
        </label>
        <Controller
          control={control}
          name="ayTypeLicence"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayTypeLicence &&
                ayTypeLicence.map((h, i) => (
                  <option key={i} value={h.ayTypeLicence}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Period Licence held for
        </label>
        <Controller
          control={control}
          name="ayPeriodLicence"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayPeriodLicence &&
                ayPeriodLicence.map((h, i) => (
                  <option key={i} value={h.ayPeriodLicence}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        if less than 3 years, what date was licence obtained?  </label>
        <Controller
          control={control}
          name="ay3yearLicenceObtain"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Please enter your 16 character driving licence number    </label>
        <Controller
          control={control}
          name="ayDrivingLicence"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              placeholder="16 character driving licence number"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        DVLA medical conditions or disability
        </label>
        <Controller
          control={control}
          name="ayMedicalCondition"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayMedicalCondition &&
                ayMedicalCondition.map((h, i) => (
                  <option key={i} value={h.ayMedicalCondition}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Were you born in the UK
        </label>
        <Controller
          control={control}
          name="ayBorkUk"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayBorkUk &&
                ayBorkUk.map((h, i) => (
                  <option key={i} value={h.ayBorkUk}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        if no, when did you become resident of Uk  </label>
        <Controller
          control={control}
          name="ayWhereResidentUk"
          render={({ field }) => (
              <TextField
           
            className="col-6"
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Use of any other vehicle?
        </label>
        <Controller
          control={control}
          name="ayUseOtherVehicle"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayUseOtherVehicle &&
                ayUseOtherVehicle.map((h, i) => (
                  <option key={i} value={h.ayUseOtherVehicle}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Any motor accident (fault or non fault) or claims (whether claim made or not) in the last 5 years?
        </label>
        <Controller
          control={control}
          name="ayUseOtherVehicle"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayMotoAciedent &&
                ayMotoAciedent.map((h, i) => (
                  <option key={i} value={h.ayMotoAciedent}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Any motor convictions fixed penalitst or disqualification in the last 5 years?
        </label>
        <Controller
          control={control}
          name="ayMotorDisqualification"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%", height: "40%" }}
            >
              <option>---select---</option>
              {ayMotorDisqualification &&
                ayUseOtherVehicle.map((h, i) => (
                  <option key={i} value={h.ayMotorDisqualification}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

            </details>

  

  
</div>
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
