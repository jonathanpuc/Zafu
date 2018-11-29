import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Outer>
    <h1>Zafu</h1>
  </Outer>
);

const Outer = styled.header`
  font-weight: 7rem;
  text-align: center;
  color: #5a4db2;
`;

export default Header;
