import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";

const SubStepThree2 = ({ deConvection,deDateConvection, dePoints, deFine, deBan,
    deConvection2,deDateConvection2, dePoints2, deFine2, deBan2,
    deConvection3,deDateConvection3, dePoints3, deFine3, deBan3}) => {

        const { control } = useFormContext();
return (
        <div>
         
          <label
            className=""
            style={{ marginTop: "30px", marginRight: "50px" , fontWeight: 'bold'}}
          >
        Conviction/Points Details Please
          </label>

         
             {/* Accident Type 1 */}

            <div className="row stepthree2">
              <div className="col-md-4 col-sm-12">

           
              <label className="" style={{ marginTop: "30px" }}>
                  <h5>1</h5>
                  Conviction Code :
                </label>
          <Controller className="stepInput"
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
                <Controller className="stepInput"
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
          <Controller className="stepInput"
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
              className="stepInput"
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
             <Controller className="stepInput"
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

 <div className="col-md-4 col-sm-12">

           
<label className="" style={{ marginTop: "30px" }}>
    <h5>2</h5>
    Conviction Code :
  </label>
<Controller className="stepInput" 
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
  <Controller className="stepInput"
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
<Controller className="stepInput" 
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
<Controller className="stepInput" 
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
<Controller className="stepInput" 
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
 <div className="col-md-4 col-sm-12">

           
<label className="" style={{ marginTop: "30px" }}>
    <h5>3</h5>
    Conviction Code :
  </label>
<Controller className="stepInput" 
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
  <Controller className="stepInput" 
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
<Controller className="stepInput" 
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
<Controller className="stepInput" 
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
<Controller className="stepInput" 
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
</div>
    );
};

export default SubStepThree2;