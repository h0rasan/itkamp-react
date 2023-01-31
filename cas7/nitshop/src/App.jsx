import React, { useState } from 'react';
import './App.css';
import CustomDiv from './components/CustomDiv/CustomDiv';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <>
      <CustomDiv />
      <ToDoList />
    </>
  );
};

export default App;
