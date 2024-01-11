import { TextField, Button} from '@mui/material'
import React,{useState} from 'react'
import {useNavigate} from 'react-router'
import { service_url } from './common_utilities/endpoints'
import { POSTAPI } from './common_utilities/service';

export default function SignUp() {
    const [formData, setFormData]= useState({username:'', password:''});
    const navigate = useNavigate();
    const handleChange = (target) => {
      const data = formData;
      data[target.name] = target.value;
      setFormData({...data})
    }

    const onFormSubmit = async(e) => {
        e.preventDefault();
        const loginResp = await POSTAPI( service_url.signup_url, formData, {});
        if(loginResp?.status === 200){
            navigate('/');
        } else {
            window.alert("Failed to signup")
        }
    }
  return (
      <div>
          <h1>Sign Up</h1>
          <form onSubmit={onFormSubmit} onChange={(e) => handleChange(e.target)}>
              <TextField required margin="normal" variant='outlined' label='Username' name='username' /><br />
              <TextField required margin="normal" variant='outlined' label='Password' type='password' /><br />
              <Button variant='contained' type='submit'>Submit</Button>
          </form>
      </div>
  )
}
