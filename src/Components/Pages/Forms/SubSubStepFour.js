import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
const SubSubStepFour = ({
    aydeType,
    aydeDate,
    aydeDamage,
    aydeCost,
    aydeFaults,aydeInjuries,
    aydeType2,aydeDate2, aydeDamage2,
    aydeCost2,aydeFaults2,aydeInjuries2,
    aydeType3, aydeDate3,aydeDamage3,aydeCost3,
    aydeFaults3, aydeInjuries3,}) => {

        console.log("type", aydeType)
    const { control } = useFormContext();
    return (
        <div>
            
           <label
             className=""
             style={{ marginTop: "10px", marginRight: "40px" }}
           >
              Motor Accidents details
           </label>

        

              {/* Accident Type 1 */}

             <div className="row">
               <div className="col-md-4 col-sm-12">

           
               <label className="" style={{ marginTop: "30px" }}>
                   <h5>1</h5>
                   Type
                 </label>
           <Controller
             control={control}
             name="aydeType"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeType &&
                   aydeType.map((h, i) => (
                     <option key={i} value={h.aydeType}>
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
                   name="aydeDate"
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
             name="aydeDamage"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeDamage &&
                   aydeDamage.map((h, i) => (
                     <option key={i} value={h.aydeDamage}>
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
                name="aydeCost"
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
             name="aydeFaults"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeFaults &&
                   aydeFaults.map((h, i) => (
                     <option key={i} value={h.aydeFaults}>
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
             name="aydeInjuries"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeInjuries &&
                   aydeInjuries.map((h, i) => (
                     <option key={i} value={h.aydeInjuries}>
                       {h.By}
                     </option>
                   ))}
               </select>
             )}
           />
               </div>

  {/* Accident Type 2 */}

               <div className="col-md-4 col-sm-12">

           
               <label className="" style={{ marginTop: "30px" }}>
                   <h5>2</h5>
                   Type
                 </label>
           <Controller
             control={control}
             name="aydeType2"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeType2 &&
                   aydeType2.map((h, i) => (
                     <option key={i} value={h.aydeType2}>
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
                   name="aydeDate2"
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
             name="aydeDamage2"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeDamage2 &&
                   aydeDamage2.map((h, i) => (
                     <option key={i} value={h.aydeDamage2}>
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
                name="aydeCost2"
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
             name="aydeFaults2"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeFaults2 &&
                   aydeFaults2.map((h, i) => (
                     <option key={i} value={h.aydeFaults2}>
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
             name="aydeInjuries2"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeInjuries2 &&
                   aydeInjuries2.map((h, i) => (
                     <option key={i} value={h.aydeInjuries2}>
                       {h.By}
                     </option>
                   ))}
               </select>
             )}
           />
  
               </div>

  {/* Accident Type 3 */}

               <div className="col-md-4 col-sm-12">

           
               <label className="" style={{ marginTop: "30px" }}>
                   <h5>3</h5>
                   Type
                 </label>
           <Controller
             control={control}
             name="aydeType3"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeType3 &&
                   aydeType3.map((h, i) => (
                     <option key={i} value={h.aydeType3}>
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
                   name="aydeDate3"
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
             name="aydeDamage3"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeDamage3 &&
                   aydeDamage3.map((h, i) => (
                     <option key={i} value={h.aydeDamage3}>
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
                name="aydeCost3"
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
             name="aydeFaults3"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeFaults3 &&
                   aydeFaults3.map((h, i) => (
                     <option key={i} value={h.aydeFaults3}>
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
             name="aydeInjuries3"
             render={({ field }) => (
               <select
                 className="form-control col-7"
                 {...field}
                 style={{ width: "90%" }}
               >
                 <option>---select---</option>
                 {aydeInjuries3 &&
                   aydeInjuries3.map((h, i) => (
                     <option key={i} value={h.aydeInjuries3}>
                       {h.By}
                     </option>
                   ))}
               </select>
             )}
           />
               </div>
             </div>
        
         </div>)


};



export default SubSubStepFour;