import axios from "axios";
import React, { useState } from "react";
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { addUser } from "../Services/api";


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;




const My =()=> {
    
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
    }

    // const [ user , setUser] = useState(defaultValue)
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit =  async (data) =>{
    
//         try{
//           return await axios.post(`${URL}/adds`, data)
//         } catch(error){
//     console.log('Error while calling', error)
//         }
//   }

 // watch input value by passing the name of it

  return (
       <Container>
    <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
    </FormControl>
    <FormControl>
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
    </FormControl>
</Container>
  );
}

export default My