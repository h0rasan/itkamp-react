import React from 'react';
import './StyledButton.css';

const StyledButton = () => {
  var buttonText = 'Click me';

  function buttonHandler() {
    buttonText = 'Clicked!';
    alert('Clicked!');
    return buttonText;
  }
  return (
    <button className='styledButton' onClick={() => buttonHandler()}>
      {buttonText}
    </button>
  );
};

export default StyledButton;
