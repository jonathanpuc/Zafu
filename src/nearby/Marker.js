import React from 'react';
import styled from 'styled-components';
import marker from './marker.png';
import Rating from '../shared/Rating';
const Marker = ({ focus, onClick, place }) => (
  <Outer focus={focus} onClick={() => onClick(place.id)}>
    {focus && (
      <InfoBox>
        <h3>{place.name}</h3>
        <Rating {...place.rating} />
      </InfoBox>
    )}
    <button>
      <img src={marker} alt="map marker" />
    </button>
  </Outer>
);

export default Marker;

const Outer = styled.div`
  button {
    border: none;
    background-color: transparent;
    img {
      width: 3rem;
      height: 3rem;
      transition: all 1s ease;
      transform: ${props => (props.focus ? 'scaleX(2) scaleY(2)' : '')};
    }
  }

  button:focus {
    img {
      transform: scaleX(2) scaleY(2);
    }
  }
`;

const InfoBox = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: max-content 1fr 1fr;
  background-color: #fff;
  padding: .8rem
  min-width: 12rem;
  left: 4rem;
  h3, p {
    margin: 0;
    align-items: center;
    perspective: 100px;
  }

  animation: hover 1500ms ease-in alternate infinite;

  @keyframes hover {
    from {
      transform: translate(0,0);
    }

    to {
      transform: translate(0, -3px);
    }
  }
`;
