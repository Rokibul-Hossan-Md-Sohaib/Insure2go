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

const StepFourSubCategories = ({
  formData,
  setForm,
  navigation,
  methods,
  register,
}) => {
  const { control } = useFormContext();
  const {
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
  return (
    <>
    
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
              className="col-4"
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
    </>
  );
};

export default StepFourSubCategories;
