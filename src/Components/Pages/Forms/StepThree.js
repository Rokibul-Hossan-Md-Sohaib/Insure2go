import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
import SubStepThree from "./SubStepThree";
import SubStepThree2 from "./SubStepThree2";

const StepThree = ({ formData, setForm, navigation, methods }) => {
  const {
    dTypeLicense,
    dPeriodLicense,
    dYearsLicenceObtained,
    d16DeivingLicence,
    dMedicalConditon,
    dAddDrivingqualify,
    dDateQualified,
    dWhreBornUk,
    dLastUkResident,
    dUseOtherVehicle,
    dNonMoorCriminal,
    dAnyMotorAccident,
    dMonitorigOffences,
    deType,
    deDate,
    deDamage,
    deCost,
    deFaults,deInjuries,
    deType2,deDate2, deDamage2,
    deCost2,deFaults2,deInjuries2,
    deType3, deDate3,deDamage3,deCost3,
    deFaults3, deInjuries3,
    deConvection,deDateConvection, dePoints, deFine, deBan,
    deConvection2,deDateConvection2, dePoints2, deFine2, deBan2,
    deConvection3,deDateConvection3, dePoints3, deFine3, deBan3


  } = formData;

  const { control } = useFormContext();
  const [isShown, setIsShown] = useState(false);

  // console.log("updateees", update);
  const [values, setValues] = useState('');
  const [values2, setValues2] = useState('');

  
  const handleMotorAccendent = (event) => {
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

  const handleMotoringOffence  = (event) => {
    // if(event.target.value == 1){
    //   console.log("hello")
    // }
  const getUser = event.target.value
  setValues2(getUser)
    console.log("hiiiiiiiiiii" ,getUser)
      // 👇️ toggle shown state
      // setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
  // console.log('vaal', val)}
  //     setValues (console.log("sssss",slectedId))
  //     const filterd = update.filter(x =>

  // x.some((s)=> s.key ==1 )

  //     )
  // console.log("ssssssssss", filterd)
  //     }

  return (
    <>
      <Container>
        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            Type of License *:
          </label>
          <Controller
            control={control}
            name="dTypeLicense"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dTypeLicense &&
                  dTypeLicense.map((h, i) => (
                    <option key={i} value={h.dTypeLicense}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            Period Licence held for *:
          </label>
          <Controller
            control={control}
            name="dPeriodLicense"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dPeriodLicense &&
                  dPeriodLicense.map((h, i) => (
                    <option key={i} value={h.dPeriodLicense}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div className="d-flex row">
          <label className="d-flex col-4" style={{ marginTop: "30px" }}>
            If held for 3 years or less, what date was licence obtained
          </label>
          <Controller
            control={control}
            name="dYearsLicenceObtained"
            render={({ field }) => (
                <TextField
           
                className="col-4"
                id="pReferrer"
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
            Please enter your 16-character GB driving licence number :
          </label>
          <Controller
            control={control}
            name="d16DeivingLicence"
            render={({ field }) => (
                <TextField
           
                className="col-4"
                id="pReferrer"
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
            DVLA medical conditions or disabilities *:
          </label>
          <Controller
            control={control}
            name="dMedicalConditon"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dMedicalConditon &&
                  dMedicalConditon.map((h, i) => (
                    <option key={i} value={h.dMedicalConditon}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            Any additional driving qualifications *:{" "}
          </label>
          <Controller
            control={control}
            name="dAddDrivingqualify"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dAddDrivingqualify &&
                  dAddDrivingqualify.map((h, i) => (
                    <option key={i} value={h.dAddDrivingqualify}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div className="d-flex row">
          <label className="d-flex col-4" style={{ marginTop: "30px" }}>
            If one is selected, what date was qualification obtained
          </label>
          <Controller
            control={control}
            name="dDateQualified"
            render={({ field }) => (
                <TextField
           
                className="col-4"
                id="pReferrer"
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
            Were you born in the UK *:{" "}
          </label>
          <Controller
            control={control}
            name="dWhreBornUk"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dWhreBornUk &&
                  dWhreBornUk.map((h, i) => (
                    <option key={i} value={h.dWhreBornUk}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div className="d-flex row">
          <label className="d-flex col-4" style={{ marginTop: "30px" }}>
            If No, when did you last become a UK resident :
          </label>
          <Controller
            control={control}
            name="dLastUkResident"
            render={({ field }) => (
                <TextField
           
                className="col-4"
                id="pReferrer"
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
            Use of any other vehicles *:
          </label>
          <Controller
            control={control}
            name="dUseOtherVehicle"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dUseOtherVehicle &&
                  dUseOtherVehicle.map((h, i) => (
                    <option key={i} value={h.dUseOtherVehicle}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            Non motoring criminal convictions :{" "}
          </label>
          <Controller
            control={control}
            name="dNonMoorCriminal"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dNonMoorCriminal &&
                  dNonMoorCriminal.map((h, i) => (
                    <option key={i} value={h.dNonMoorCriminal}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            Any motor accidents (fault or non-fault) or claims (whether claim
            made or not) in the last 5 years *:
          </label>

          <Controller
            control={control}
            name="dAnyMotorAccident"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
               onChange={handleMotorAccendent}
                // onChange={(e) => {
                //   handleClik(e);
                // }}
              >
                <option>---select---</option>
                {/* <option value="1"><h4 >{dAnyMotorAccident.By} </h4></option>
                <option value="2">{dAnyMotorAccident.Byx} </option> */}
                {dAnyMotorAccident &&
                  dAnyMotorAccident.map((h, i) => (
                    <option key={i} value={h.dAnyMotorAccident}>
                      <h2>{h.By}</h2>
                    </option>
                  ))}
              
              </select>
            )}
          />
        </div>

        {/* new table for accident */}


       {
        values == "Yes" && (
          <SubStepThree
          deType={deType}
    deDate={deDate}
    deDamage={deDamage}
    deCost={deCost}
    deFaults={deFaults}deInjuries={deInjuries}
    deType2 ={deType2}deDate2={deDate2} deDamage2={deDamage2}
    deCost2={deCost2}deFaults2={deFaults2}deInjuries2={deInjuries2}
    deType3={deType3} deDate3={deDate3}deDamage3={deDamage3}deCost3={deCost3}
    deFaults3={deFaults3} deInjuries3={deInjuries3}
          
          />
        )

}

{/* end of accident detail */}


        <div div className="d-flex row">
          <label className="col-4" style={{ marginTop: "10px" }}>
            In the last 5 years, has the driver had any motoring offences,
            including fixed penalties, convictions, driver awareness courses or
            disqualifications, or any pending prosecutions? *:
          </label>
          <Controller
            control={control}
            name="dWhreBornUk"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
                onChange={handleMotoringOffence}
              >
                <option>---select---</option>
                {dWhreBornUk &&
                  dWhreBornUk.map((h, i) => (
                    <option key={i} value={h.dWhreBornUk}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

        {/* start Fixed Penalty Or Disqualification Details
 detail */}
{
  values2 =="Yes" && (
    <SubStepThree2
    deConvection={deConvection}deDateConvection={deDateConvection} dePoints={dePoints} deFine={deFine} 
    deBan={deBan}deConvection2 ={deConvection2}deDateConvection2={deDateConvection2} dePoints2={dePoints2}
    deFine2={deFine2} deBan2={deBan2}deConvection3={deConvection3}deDateConvection3={deDateConvection3}
     dePoints3={dePoints3} deFine3={deFine3} deBan3={deBan3}
    />
  )
}

      </Container>
    </>
  );
};

export default StepThree;
