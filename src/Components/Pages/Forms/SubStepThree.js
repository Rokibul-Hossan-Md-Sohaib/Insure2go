import { Box, Container, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Fstyle.css";
import {
  useForm,
  useFormContext,
  FormProvider,
  Controller,
} from "react-hook-form";
const SubStepThree = ({deType,
    deDate,
    deDamage,
    deCost,
    deFaults,deInjuries,
    deType2,deDate2, deDamage2,
    deCost2,deFaults2,deInjuries2,
    deType3, deDate3,deDamage3,deCost3,
    deFaults3, deInjuries3,}) => {
    const { control } = useFormContext();
    return (
        <div>
            
           <label
             className=""
             style={{ marginTop: "10px", marginRight: "40px" }}
           >
             If Yes,  Motor Accidents details {" "}
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

               <div className="col-md-4 col-sm-12">

           
               <label className="" style={{ marginTop: "30px" }}>
                   <h5>2</h5>
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

               <div className="col-md-4 col-sm-12">

           
               <label className="" style={{ marginTop: "30px" }}>
                   <h5>3</h5>
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
        
         </div>)


};

export default SubStepThree;