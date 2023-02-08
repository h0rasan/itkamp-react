import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './styledButton.css';

const StyledButton = ({ onClickHandler, innerText }) => {
  return (
    <PrimaryButton className='styledButton' onClick={onClickHandler}>
      {innerText}
    </PrimaryButton>
  );
};

export default StyledButton;
