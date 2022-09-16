import {
  Container,
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
import './Fstyle.css'
const StepTwo = ({ formData, setForm, navigation, methods, register }) => {
  const {
    pHearUs,
    pReferrer,
    pAnyDriver,
    pTitle,
    pFirstName,
    pLastName,
    pBrith,
    PHousNam,
    pAddress,
    pPostCode,
    pMaStatus,
    pEmStatus,
    pOcuupation,
    pBusiness,
    pHomeowner,
    pAnyChild,
    cEmail,
    cMoble,
    cTelephone,
    cContact
  } = formData;

  const { control } = useFormContext();
  return (
    <>
      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
          How did you hear about us?  :
        </label>
        <Controller
          control={control}
          name="pHearUs"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {pHearUs &&
                pHearUs.map((h, i) => (
                  <option key={i} value={h.pHearUs}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        If by a friend, family or referrer please state their name
        </label>
        <Controller
          control={control}
          name="pReferrer"
          render={({ field }) => (
              <TextField
             required
            kkk 
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
        Have you or any of the drivers ever had insurance declined, cancelled or special terms imposed? :
        </label>
        <Controller
          control={control}
          name="pAnyDriver"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {pAnyDriver &&
                pAnyDriver.map((h, i) => (
                  <option key={i} value={h.pAnyDriver}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


{/* personal Info */}

      <h1 className="mt-5">Personal Information</h1>
      <hr style={{color: "black"}}></hr>

        <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Title         </label>
        <Controller
          control={control}
          name="pTitle"
          render={({ field }) => (
              <TextField
             required
            kkk 
              className="col-4"
              id="pTitle"
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
        First Name:         </label>
        <Controller
          control={control}
          name="pFirstName"
          render={({ field }) => (
              <TextField
             required
              className="col-4"
              id="pFirstName"
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
        Last Name:         </label>
        <Controller
          control={control}
          name="pLastName"
          render={({ field }) => (
              <TextField
             required
              className="col-4"
              id="pLastName"
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
        Date Of Birth:         </label>
        <Controller
          control={control}
          name="pBrith"
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

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        House Name / Number* :      </label>
        <Controller
          control={control}
          name="PHousNam"
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

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        First Line of Address* :        </label>
        <Controller
          control={control}
          name="pAddress"
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

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Postcode* :     </label>
        <Controller
          control={control}
          name="pPostCode"
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


      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Marital Status *:
        </label>
        <Controller
          control={control}
          name="pMaStatus"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {pMaStatus &&
                pMaStatus.map((h, i) => (
                  <option key={i} value={h.pMaStatus}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
      
Employment Status *:      </label>
        <Controller
          control={control}
          name="pEmStatus"
          render={({ field }) => (
              <TextField
             required
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
        If Employed/Self Employed, What is your occupation:
               </label>
        <Controller
          control={control}
          name="pOcuupation"
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

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        If Employed/Self Employed, What is your Business:
                       </label>
        <Controller
          control={control}
          name="pBusiness"
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

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Any Child Under 16 *
        </label>
        <Controller
          control={control}
          name="pAnyChild"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {pAnyChild &&
                pAnyChild.map((h, i) => (
                  <option key={i} value={h.pAnyChild}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>


      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Homeowner *        </label>
        <Controller
          control={control}
          name="pMaStatus"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {pHomeowner &&
                pHomeowner.map((h, i) => (
                  <option key={i} value={h.pHomeowner}>
                    {h.By}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      <h1 className="mt-5">Contact Information</h1>
      <hr style={{color: "black"}}></hr>

        <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Email *:       </label>
        <Controller
          control={control}
          name="cEmail"
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

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Mobile* :     </label>
        <Controller
          control={control}
          name="cMoble"
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

 

      <div className="d-flex row">
        <label className="d-flex col-4" style={{ marginTop: "30px" }}>
        Telephone* :     </label>
        <Controller
          control={control}
          name="cTelephone"
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

      <div div className="d-flex row">
        <label className="col-4" style={{ marginTop: "10px" }}>
        Please Contact Me Via :
        </label>
        <Controller
          control={control}
          name="cContact"
          render={({ field }) => (
            <select
              className="form-control col-7"
              {...field}
              style={{ width: "50%" }}
            >
              <option>---select---</option>
              {cContact &&
                cContact.map((h, i) => (
                  <option key={i} value={h.cContact}>
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

export default StepTwo;
