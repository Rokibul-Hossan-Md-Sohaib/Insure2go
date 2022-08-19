import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";

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
  const [update, setUpdate] = useState(dAnyMotorAccident);
  // console.log("updateees", update);
  const [values, setValues] = useState();
  const myfunc = () => {
    return <div>hello</div>;
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
            name="dPeriodLicense"
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
                // onChange={(e) => {
                //   handleClik(e);
                // }}
              >
                <option>---select---</option>
                {dAnyMotorAccident &&
                  dAnyMotorAccident.map((h, i) => (
                    <option key={i} value={h.dAnyMotorAccident}>
                      {h.By}
                    </option>
                  ))}
              
              </select>
            )}
          />
        </div>

        {/* new table for accident */}


        <div className="d-flex mr-4 mt-3">
          <label
            className=""
            style={{ marginTop: "10px", marginRight: "40px" }}
          >
            If Yes,  Motor Accidents details {" "}
          </label>

          <details className="mt-2 ml-5" 
           style={{ marginLeft: "120px" }}
          >
            <summary style={{ color: "gray", border: '2px solid gray' }}>
              Motor Accidents Or Claim Details
            </summary>

             {/* Accident Type 3 */}

            <div className="row">
              <div className="col-4">

           
              <label className="" style={{ marginTop: "30px" }}>
                  <h1>1</h1>
                  Type
                </label>
          <Controller
            control={control}
            name="deType"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deType &&
                  deType.map((h, i) => (
                    <option key={i} value={h.deType}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
       
                <label className="" style={{ marginTop: "30px" }}>
               
                  Date
                </label>
                <Controller
                  control={control}
                  name="deDate"
                  render={({ field }) => (
                    <TextField
                      sx={{ display: "block" }}
                      id="pReferrer"
                      label=""
                      variant="outlined"
                      halfwidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
         <label className="" style={{ marginTop: "30px" }}>
                  Damage :
                </label>
          <Controller
            control={control}
            name="deDamage"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deDamage &&
                  deDamage.map((h, i) => (
                    <option key={i} value={h.deDamage}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
               
Cost(£) - if known :
             </label>
             <Controller
               control={control}
               name="deCost"
               render={({ field }) => (
                 <TextField
                   sx={{ display: "block" }}
                   id="pReferrer"
                   label=""
                   variant="outlined"
                   halfwidth
                   margin="normal"
                   {...field}
                 />
               )}
             />

<label className="" style={{ marginTop: "30px" }}>
Fault :
                </label>
          <Controller
            control={control}
            name="deFaults"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deFaults &&
                  deFaults.map((h, i) => (
                    <option key={i} value={h.deFaults}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
<label className="" style={{ marginTop: "30px" }}>
Any Injuries                 </label>
          <Controller
            control={control}
            name="deInjuries"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deInjuries &&
                  deInjuries.map((h, i) => (
                    <option key={i} value={h.deInjuries}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
              </div>

 {/* Accident Type 2 */}

              <div className="col-4">

           
              <label className="" style={{ marginTop: "30px" }}>
                  <h1>2</h1>
                  Type
                </label>
          <Controller
            control={control}
            name="deType2"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deType2 &&
                  deType2.map((h, i) => (
                    <option key={i} value={h.deType2}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
       
                <label className="" style={{ marginTop: "30px" }}>
               
                  Date
                </label>
                <Controller
                  control={control}
                  name="deDate2"
                  render={({ field }) => (
                    <TextField
                      sx={{ display: "block" }}
                      id="pReferrer"
                      label=""
                      variant="outlined"
                      halfwidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
         <label className="" style={{ marginTop: "30px" }}>
                  Damage :
                </label>
          <Controller
            control={control}
            name="deDamage2"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deDamage2 &&
                  deDamage2.map((h, i) => (
                    <option key={i} value={h.deDamage2}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
               
Cost(£) - if known :
             </label>
             <Controller
               control={control}
               name="deCost2"
               render={({ field }) => (
                 <TextField
                   sx={{ display: "block" }}
                   id="pReferrer"
                   label=""
                   variant="outlined"
                   halfwidth
                   margin="normal"
                   {...field}
                 />
               )}
             />

<label className="" style={{ marginTop: "30px" }}>
Fault :
                </label>
          <Controller
            control={control}
            name="deFaults2"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deFaults2 &&
                  deFaults2.map((h, i) => (
                    <option key={i} value={h.deFaults2}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
Any Injuries                 </label>
          <Controller
            control={control}
            name="deInjuries2"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deInjuries2 &&
                  deInjuries2.map((h, i) => (
                    <option key={i} value={h.deInjuries2}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
  
              </div>

 {/* Accident Type 3 */}

              <div className="col-4">

           
              <label className="" style={{ marginTop: "30px" }}>
                  <h1>3</h1>
                  Type
                </label>
          <Controller
            control={control}
            name="deType3"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deType3 &&
                  deType3.map((h, i) => (
                    <option key={i} value={h.deType3}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
       
                <label className="" style={{ marginTop: "30px" }}>
               
                  Date
                </label>
                <Controller
                  control={control}
                  name="deDate3"
                  render={({ field }) => (
                    <TextField
                      sx={{ display: "block" }}
                      id="pReferrer"
                      label=""
                      variant="outlined"
                      halfwidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
         <label className="" style={{ marginTop: "30px" }}>
                  Damage :
                </label>
          <Controller
            control={control}
            name="deDamage3"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deDamage3 &&
                  deDamage3.map((h, i) => (
                    <option key={i} value={h.deDamage3}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
               
Cost(£) - if known :
             </label>
             <Controller
               control={control}
               name="deCost3"
               render={({ field }) => (
                 <TextField
                   sx={{ display: "block" }}
                   id="pReferrer"
                   label=""
                   variant="outlined"
                   halfwidth
                   margin="normal"
                   {...field}
                 />
               )}
             />

<label className="" style={{ marginTop: "30px" }}>
Fault :
                </label>
          <Controller
            control={control}
            name="deFaults3"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deFaults3 &&
                  deFaults3.map((h, i) => (
                    <option key={i} value={h.deFaults3}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
Any Injuries                 </label>
          <Controller
            control={control}
            name="deInjuries3"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deInjuries3 &&
                  deInjuries3.map((h, i) => (
                    <option key={i} value={h.deInjuries3}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
              </div>
            </div>
          </details>
        </div>

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

<div className="d-flex mr-4 mt-3">
          <label
            className=""
            style={{ marginTop: "10px", marginRight: "50px" }}
          >
          If Yes, Conviction/Points Details
          </label>

          <details className="mt-2 ml-3"
               style={{ marginLeft: "100px" }}
          >
            <summary style={{ color: "gray", border: '2px solid gray' }}>
            Motor Conviction, Fixed Penalty Or br Disqualification Details
            </summary>

             {/* Accident Type 3 */}

            <div className="row">
              <div className="col-4">

           
              <label className="" style={{ marginTop: "30px" }}>
                  <h1>1</h1>
                  Conviction Code :
                </label>
          <Controller
            control={control}
            name="deConvection"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {deConvection &&
                  deConvection.map((h, i) => (
                    <option key={i} value={h.deConvection}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
       
                <label className="" style={{ marginTop: "30px" }}>
               
                Date Of Conviction :
                </label>
                <Controller
                  control={control}
                  name="deDateConvection"
                  render={({ field }) => (
                    <TextField
                      sx={{ display: "block" }}
                      id="pReferrer"
                      label=""
                      variant="outlined"
                      halfwidth
                      margin="normal"
                      {...field}
                    />
                  )}
                />
         <label className="" style={{ marginTop: "30px" }}>
         Points :
                </label>
          <Controller
            control={control}
            name="dePoints"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {dePoints &&
                  dePoints.map((h, i) => (
                    <option key={i} value={h.dePoints}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />

<label className="" style={{ marginTop: "30px" }}>
               
Fine(£) - if any :
             </label>
             <Controller
               control={control}
               name="deFine"
               render={({ field }) => (
                 <TextField
                   sx={{ display: "block" }}
                   id="pReferrer"
                   label=""
                   variant="outlined"
                   halfwidth
                   margin="normal"
                   {...field}
                 />
               )}
             />

<label className="" style={{ marginTop: "30px" }}>
               
Ban(Months) - if any :
             </label>
             <Controller
               control={control}
               name="deBan"
               render={({ field }) => (
                 <TextField
                   sx={{ display: "block" }}
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

 {/* Accident Type 2 */}

 <div className="col-4">

           
<label className="" style={{ marginTop: "30px" }}>
    <h1>2</h1>
    Conviction Code :
  </label>
<Controller
control={control}
name="deConvection2"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {deConvection2 &&
    deConvection2.map((h, i) => (
      <option key={i} value={h.deConvection2}>
        {h.By}
      </option>
    ))}
</select>
)}
/>

  <label className="" style={{ marginTop: "30px" }}>
 
  Date Of Conviction :
  </label>
  <Controller
    control={control}
    name="deDateConvection2"
    render={({ field }) => (
      <TextField
        sx={{ display: "block" }}
        id="pReferrer"
        label=""
        variant="outlined"
        halfwidth
        margin="normal"
        {...field}
      />
    )}
  />
<label className="" style={{ marginTop: "30px" }}>
Points :
  </label>
<Controller
control={control}
name="dePoints2"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {dePoints2 &&
    dePoints2.map((h, i) => (
      <option key={i} value={h.dePoints2}>
        {h.By}
      </option>
    ))}
</select>
)}
/>

<label className="" style={{ marginTop: "30px" }}>
 
Fine(£) - if any :
</label>
<Controller
 control={control}
 name="deFine2"
 render={({ field }) => (
   <TextField
     sx={{ display: "block" }}
     id="pReferrer"
     label=""
     variant="outlined"
     halfwidth
     margin="normal"
     {...field}
   />
 )}
/>

<label className="" style={{ marginTop: "30px" }}>
 
Ban(Months) - if any :
</label>
<Controller
 control={control}
 name="deBan2"
 render={({ field }) => (
   <TextField
     sx={{ display: "block" }}
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

 {/* conviction */}
 <div className="col-4">

           
<label className="" style={{ marginTop: "30px" }}>
    <h1>3</h1>
    Conviction Code :
  </label>
<Controller
control={control}
name="deConvection3"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {deConvection3 &&
    deConvection3.map((h, i) => (
      <option key={i} value={h.deConvection3}>
        {h.By}
      </option>
    ))}
</select>
)}
/>

  <label className="" style={{ marginTop: "30px" }}>
 
  Date Of Conviction :
  </label>
  <Controller
    control={control}
    name="deDateConvection3"
    render={({ field }) => (
      <TextField
        sx={{ display: "block" }}
        id="pReferrer"
        label=""
        variant="outlined"
        halfwidth
        margin="normal"
        {...field}
      />
    )}
  />
<label className="" style={{ marginTop: "30px" }}>
Points :
  </label>
<Controller
control={control}
name="dePoints3"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {dePoints3 &&
    dePoints3.map((h, i) => (
      <option key={i} value={h.dePoints3}>
        {h.By}
      </option>
    ))}
</select>
)}
/>

<label className="" style={{ marginTop: "30px" }}>
 
Fine(£) - if any :
</label>
<Controller
 control={control}
 name="deFine3"
 render={({ field }) => (
   <TextField
     sx={{ display: "block" }}
     id="pReferrer"
     label=""
     variant="outlined"
     halfwidth
     margin="normal"
     {...field}
   />
 )}
/>

<label className="" style={{ marginTop: "30px" }}>
 
Ban(Months) - if any :
</label>
<Controller
 control={control}
 name="deBan3"
 render={({ field }) => (
   <TextField
     sx={{ display: "block" }}
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
            </div>
          </details>
        </div>
      </Container>
    </>
  );
};

export default StepThree;
