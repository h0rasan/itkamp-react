import React from 'react';
import './App.css';
import PrimaryButton from './components/PrimaryButton/PrimaryButton';
import StyledDiv from './components/StyledDiv/StyledDiv';
//import ToDo from './components/ToDo/ToDo';
//import GridCmp from './components/Grid/Grid';

const App = () => {
  return (
    <>
      <PrimaryButton padding={10} borderColor='yellow'>
        Primary Button
      </PrimaryButton>
      <StyledDiv>Some sample text here</StyledDiv>
    </>
  );
};

export default App;
