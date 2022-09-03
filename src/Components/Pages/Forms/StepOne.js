import {
  Container,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
import "./Fstyle.css";

const StepOne = ({formData, setForm, navigation, methods, register}) => {
  const {
    vRegistration,
    vApproxValueCar,
    vModification,
    vDatePurchase,
    vUseCarFor,
    vKeptTheDay,
    vKeptOvernight,
    vKeptSameAddress,
    VRegKepper,
    vLegalOwner,
    vAnnualmileage,
    vTypeCover,
    vAnyNoDiscount,
    vNCDEarned,
    vProtectNCD,
    vVoluntaryAccess,
    vPayInsu,
    vPolicyStart,
  } = formData;

  const { control } = useFormContext();

  return (
    <>
      <h1 className="mt-5">Vehicle Details</h1>
      <hr style={{ color: "black" }}></hr>
      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Vehicle Registration *:        </label>
        <Controller
          control={control}
          name="vRegistration"
          render={({ field }) => (
              <TextField
            required
            kkk 
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
        Approximate value of the car right now? *: </label>
        <Controller
          control={control}
          name="vApproxValueCar"
          render={({ field }) => (
              <TextField
            required
              className="col-4"
              kkk 
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Does the vehicle have any modifications? *:
        </label>
        <Controller
          control={control}
          name="vModification"
          
          render={({ field }) => (
            <select
            requred 
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option >---select---</option>
              {vModification &&
                vModification.map((h, i) => (
                  <option kkk key={i} value={h.vModification}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
           
      </div>

      <h1 className="mt-5">Vehicle Usage</h1>
      <hr style={{ color: "black" }}></hr>

    <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Date of Purchase :      </label>
        <Controller
          control={control}
          name="vDatePurchase"
          render={({ field }) => (
              <TextField
            required
          
              className="col-4"
              kkk 
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        What do you use the car for? * :
        </label>
        <Controller
          control={control}
          name="vUseCarFor"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vUseCarFor &&
                vUseCarFor.map((h, i) => (
                  <option key={i} value={h.vUseCarFor}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Where is the vehicle kept during the day * :
        </label>
        <Controller
          control={control}
          name="vKeptTheDay"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vKeptTheDay &&
                vKeptTheDay.map((h, i) => (
                  <option key={i} value={h.vKeptTheDay}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Where is the vehicle kept overnight * :
        </label>
        <Controller
          control={control}
          name="vKeptOvernight"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vKeptOvernight &&
                vKeptOvernight.map((h, i) => (
                  <option key={i} value={h.vKeptOvernight}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Is the vehicle kept at the same address * :
        </label>
        <Controller
          control={control}
          name="vKeptSameAddress"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vKeptSameAddress &&
                vKeptSameAddress.map((h, i) => (
                  <option key={i} value={h.vKeptSameAddress}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>
      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Registered Keeper * :
        </label>
        <Controller
          control={control}
          name="VRegKepper"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {VRegKepper &&
                VRegKepper.map((h, i) => (
                  <option key={i} value={h.VRegKepper}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Legal Owner * :        </label>
        <Controller
          control={control}
          name="vLegalOwner"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vLegalOwner &&
                vLegalOwner.map((h, i) => (
                  <option key={i} value={h.vLegalOwner}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Estimated Annual Mileage *:      </label>
        <Controller
          control={control}
          name="vAnnualmileage"
          render={({ field }) => (
              <TextField
            required
              className="col-4"
              kkk 
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
   Type of Cover * :
        </label>
        <Controller
          control={control}
          name="vTypeCover"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vTypeCover &&
                vTypeCover.map((h, i) => (
                  <option key={i} value={h.vTypeCover}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Any no claims discount * :
        </label>
        <Controller
          control={control}
          name="vAnyNoDiscount"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vAnyNoDiscount &&
                vAnyNoDiscount.map((h, i) => (
                  <option key={i} value={h.vAnyNoDiscount}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Was this NCD earned in the UK :
        </label>
        <Controller
          control={control}
          name="vNCDEarned"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vNCDEarned &&
                vNCDEarned.map((h, i) => (
                  <option key={i} value={h.vNCDEarned}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Would you like to protect your NCD :
        </label>
        <Controller
          control={control}
          name="vProtectNCD"
          render={({ field }) => (
 
            <select
              className="form-control col-7"
              
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vProtectNCD &&
                vProtectNCD.map((h, i) => (
                  <option key={i} value={h.vProtectNCD}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        What voluntary excess would you like * :
        </label>
        <Controller
          control={control}
          name="vVoluntaryAccess"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vVoluntaryAccess &&
                vVoluntaryAccess.map((h, i) => (
                  <option key={i} value={h.vVoluntaryAccess}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div  className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        How do you normally pay for insurance * :
        </label>
        <Controller
          control={control}
          name="vPayInsu"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {vPayInsu &&
                vPayInsu.map((h, i) => (
                  <option key={i} value={h.vPayInsu}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        When would you like the policy to start * :     </label>
        <Controller
          control={control}
          name="vPolicyStart"
          render={({ field }) => (
              <TextField
            required
              className="col-4"
              kkk 
              label=""
              variant="outlined"
              halfwidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div> 
    </>
  );
};

export default StepOne;
