import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  function goToStartScreen() {
    history.push('/');
  }

  return (
    <Outer>
      <h1 onClick={goToStartScreen}>Zafu</h1>
    </Outer>
  );
};

const Outer = styled.header`
  font-weight: 7rem;
  text-align: center;
  color: #5a4db2;

  h1 {
    cursor: pointer;
    display: inline-block;
  }
`;

export default withRouter(Header);
