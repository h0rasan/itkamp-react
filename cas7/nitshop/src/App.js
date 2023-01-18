import React, { useState, useEffect } from 'react';
import './App.css';
import StyledButton from './components/StyledButton/StyledButton';
import StyledHeader from './components/StyledHeader/StyledHeader';

function App() {
  const [innerText, setInnerText] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText('clicked') : setInnerText('click me!');
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className='App'>
      <StyledHeader />
      <StyledButton innerText={innerText} onClickHandler={buttonClick} />
    </div>
  );
}

export default App;
