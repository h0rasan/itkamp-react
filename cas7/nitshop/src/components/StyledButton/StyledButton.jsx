import React from 'react';
import './StyledButton.css';

const StyledButton = (props) => {
  return (
    <button className='styledButton' onClick={props.onClickHandler}>
      Submit
    </button>
  );
};

export default StyledButton;
