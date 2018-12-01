import React from 'react';
import styled from 'styled-components';
import userMarker from './userMarker.png';

const UserMarker = () => (
  <div>
    <Image src={userMarker} alt="You are here" />
  </div>
);

const Image = styled.img`
  width: 3rem;
  height: 3rem;
`;

export default UserMarker;
