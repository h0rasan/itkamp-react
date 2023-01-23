import React from 'react';
import './App.css';
import CustomForm from './components/CustomForm/CustomForm';
import CustomDiv from './components/CustumDiv/CustumDiv';

const App = () => {
  const [fullName, setFullName] = React.useState('');

  function dataGrabber(name, lastName) {
    let fullName = name + ' ' + lastName;
    setFullName(fullName);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <CustomDiv>
          <h1>{fullName}</h1>
        </CustomDiv>
        <CustomForm sendData={(name, lName) => dataGrabber(name, lName)} />
      </header>
    </div>
  );
};

export default App;
