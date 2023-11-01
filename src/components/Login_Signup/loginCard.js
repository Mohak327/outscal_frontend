import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';

import { userCredentials } from '../../data/userCredentials';
import { THEME_DARK_COLOR, THEME_LIGHT_COLOR } from '../../Constants';
import { useAppContext } from '../../Utility/AppContext';
import { ThemedButton } from '../commons/buttons';
import { StyledTextField } from '../commons/style';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';

const LoginCard = ({ handleLogin }) => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });
  const [errors, setErrors] = useState({ email: '', username: '', password: '' });
  const { deskTopView } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    let valid = true;
    const newErrors = { ...errors };

    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    }
    
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }
    
    if (valid) {
      // Check if provided credentials match user data (replace this with your actual authentication logic)
      const user = userCredentials.find(
        (user) =>
        user.username === formData.username 
        && user.password === formData.password
        );
        
        if (user) {
            handleLogin(formData);
            navigate('/dashboard');
          } else {
            newErrors.username = 'Invalid username or password';
            newErrors.password = 'Invalid username or password';
            setErrors(newErrors);

            document.getElementById('username').style.borderColor = 'red';
            document.getElementById('password').style.borderColor = 'red';
          }
          console.log('data', userCredentials, user, formData)
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Box
    sx={{
        width: deskTopView ? '40vw' : '80vw',
        maxWidth: '600px',
        margin: '0 24px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: `2px solid ${THEME_LIGHT_COLOR}`,
        mt: 4,
    }}
    >  
      <form 
        onSubmit={handleSubmit}
        style={{ gap: '16px', margin: '0 auto', maxWidth: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}
      >
        {/* <EmailInput 
          styleClass={{width: deskTopView ? '40vw' : '80vw', maxWidth: '600px'}}
          formData={formData} 
          handleChange = {handleChange}
          errors={errors}
        /> */}
        <StyledTextField
          name="username"
          label="Username"
          variant="outlined"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          style={{ width: deskTopView ? '40vw' : '80vw', maxWidth: '600px' }}
          error={!!errors.username}
          helperText={errors.username}
          id="username"
        />
        <PasswordInput 
          styleClass={{width: deskTopView ? '40vw' : '80vw', maxWidth: '600px'}}
          formData={formData} 
          handleChange = {handleChange}
          errors={errors}
        />
        <ThemedButton content="Login" width='180px' />
      </form>
      <Typography sx={{cursor:'pointer', mt: 0.5, color: THEME_DARK_COLOR, fontSize: '14px'}}>New User? Create an account</Typography>
    </Box>
  );
};

export default LoginCard;

