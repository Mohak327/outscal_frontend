import React from 'react';
import { StyledTextField } from '../commons/style';

const EmailInput = ({ formData, handleChange, errors, styleClass }) => {

  return (
    <StyledTextField
      style={styleClass}
      name="email"
      label="Email"
      type='text'
      variant="outlined"
      value={formData.email}
      onChange={handleChange}
      fullWidth
    //   margin="normal"
      error={!!errors.email}
      helperText={errors.email}
      id="email"
    />
  );
};

export default EmailInput;
