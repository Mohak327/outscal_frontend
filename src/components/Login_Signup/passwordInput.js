import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { StyledTextField } from '../commons/style';

const PasswordInput = ({ formData, handleChange, errors, styleClass }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledTextField
      style={styleClass}
      name="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      value={formData.password}
      onChange={handleChange}
      fullWidth
      // margin="normal"
      error={!!errors.password}
      helperText={errors.password}
      id="password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
