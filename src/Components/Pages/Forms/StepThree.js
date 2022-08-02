import { Container, TextField } from "@mui/material";
import React from "react";
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
  } = formData;
  const { control } = useFormContext();
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
            name="dUseOtherVehicle"
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
            Use of any other vehicles *:{" "}
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
            name="dMonitorigOffences"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "50%" }}
              >
                <option>---select---</option>
                {dMonitorigOffences &&
                  dMonitorigOffences.map((h, i) => (
                    <option key={i} value={h.dMonitorigOffences}>
                      {h.By}
                    </option>
                  ))}
              </select>
            )}
          />
        </div>

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
      </Container>
    </>
  );
};

export default StepThree;
