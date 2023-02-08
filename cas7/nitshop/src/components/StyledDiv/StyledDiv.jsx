import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: ${(props) => (props.padding ? 1 : 1.5)}em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  dispay: flex;
  justify-content: ${(props) => (props.justifyContent ? 'center' : 'left')};
`;

export default StyledDiv;
