import React, {useState} from 'react'
import {TextField,Button} from '@mui/material';
import {useNavigate} from 'react-router';
import { POSTAPI } from './common_utilities/service';
import { service_url } from './common_utilities/endpoints';

export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const submit = async () => {
        const payload = {"username": username, "password": password}
        const loginResp = await POSTAPI( service_url.login_url, payload, {});
        if(loginResp?.status === 200){
            navigate('/orders')
        } else {
            window.alert("Invalid Username/Password!")
        }
    }

    const gotoSignup = () => {
        navigate('/signUp')
    }
  return (
    <div>
        <h1>Welcome to Andavi Solutions!</h1>
        <form onSubmit={submit}>
        <TextField required margin='normal' id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/><br/>
        <TextField required margin='normal' id="outlined-basic1" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/><br/>
        <Button variant="contained" style={{margin: '10px'}} type='submit'>Login</Button>
        <Button variant='contained' onClick={gotoSignup}>Sign Up</Button>
        </form>
    </div>
  )
}
