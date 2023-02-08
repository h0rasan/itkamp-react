import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: 2px solid lightblue;
  color: ${(props) => (props.primary ? 'gold' : 'white')};
  background-color: ${(props) => (props.primary ? 'white' : 'gold')};
  padding: 20px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  margin: 10px;
`;

export default PrimaryButton;
