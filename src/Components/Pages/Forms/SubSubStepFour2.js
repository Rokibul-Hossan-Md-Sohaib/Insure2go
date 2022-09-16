import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";

const SubSubStepFour2 = ({ aydeConvection,aydeDateConvection, aydePoints, aydeFine, aydeBan,
    aydeConvection2,aydeDateConvection2, aydePoints2, aydeFine2, aydeBan2,
    aydeConvection3,aydeDateConvection3, aydePoints3, aydeFine3, aydeBan3}) => {

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
            name="aydeConvection"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {aydeConvection &&
                  aydeConvection.map((h, i) => (
                    <option key={i} value={h.aydeConvection}>
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
                  name="aydeDateConvection"
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
            name="aydePoints"
            render={({ field }) => (
              <select
                className="form-control col-7"
                {...field}
                style={{ width: "90%" }}
              >
                <option>---select---</option>
                {aydePoints &&
                  aydePoints.map((h, i) => (
                    <option key={i} value={h.aydePoints}>
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
               name="aydeFine"
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
               name="aydeBan"
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
name="aydeConvection2"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {aydeConvection2 &&
    aydeConvection2.map((h, i) => (
      <option key={i} value={h.aydeConvection2}>
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
    name="aydeDateConvection2"
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
name="aydePoints2"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {aydePoints2 &&
    aydePoints2.map((h, i) => (
      <option key={i} value={h.aydePoints2}>
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
 name="aydeFine2"
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
 name="aydeBan2"
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
name="aydeConvection3"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {aydeConvection3 &&
    aydeConvection3.map((h, i) => (
      <option key={i} value={h.aydeConvection3}>
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
    name="aydeDateConvection3"
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
name="aydePoints3"
render={({ field }) => (
<select
  className="form-control col-7"
  {...field}
  style={{ width: "90%" }}
>
  <option>---select---</option>
  {aydePoints3 &&
    aydePoints3.map((h, i) => (
      <option key={i} value={h.aydePoints3}>
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
 name="aydeFine3"
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
 name="aydeBan3"
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


export default SubSubStepFour2;