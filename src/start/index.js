import React from 'react';
import styled from 'styled-components';
const Start = () => (
  <Outer>
    <h2>Welcome to Zafu.</h2>
    <p>Craving that next plant based meal?</p>
    <p>Find a place near you or search by cuisine.</p>
    <ButtonsContainer>
      <button>What's nearby?</button>
      <button>Find by cuisine.</button>
    </ButtonsContainer>
  </Outer>
);

const Outer = styled.div`
  margin-top: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  button {
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 2rem;
    font-size: 1.7rem;
  }
  > button:first-child {
    background-color: #69b4a0;
    color: #fff;
  }

  > button:last-child {
    background-color: #f9e75e;
    color: #333366;
  }
`;

export default Start;
