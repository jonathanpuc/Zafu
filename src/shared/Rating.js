import React from 'react';
import star from './star.png';
import styled from 'styled-components';
const Rating = ({ aggregate, votes }) => (
  <Outer>
    <StarContainer>
      <img src={star} alt="rating" />
      <p>{votes}</p>
    </StarContainer>
    <p>{aggregate}</p>
  </Outer>
);

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 2.3rem;
    width: 2.3rem;
  }

  p {
    font-size: 0.8rem;
    color: #a2a2a2;
  }
  margin-right: 5px;
`;

const Outer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px;
`;

export default Rating;
