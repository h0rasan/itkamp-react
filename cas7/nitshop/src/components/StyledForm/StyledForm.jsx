import React from 'react';
import StyledButton from '../StyledButton/StyledButton';
import StyledInput from '../StyleddInput/StyledInput';
import './StyledForm.css';

const StyledForm = () => {
  return (
    <div className='form-container'>
      <label>Name</label>
      <StyledInput />
      <StyledButton />
      <label>Surname</label>
      <StyledInput type='text' />
      <StyledButton />
    </div>
  );
};

export default StyledForm;
