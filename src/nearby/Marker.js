import React from 'react';
import styled from 'styled-components';
import marker from './marker.png';
import pointer from './pointer.png';
import Rating from '../shared/Rating';
const Marker = ({ focus, onClick, place }) => (
  <Outer focus={focus} onClick={() => onClick(place.id)}>
    {focus && (
      <InfoBox>
        <h3>{place.name}</h3>
        <div>
          <Rating {...place.rating} />
          <img src={pointer} alt="see more" />
        </div>
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
  display: flex;
  flex-direction:column;

  background-color: #f9f9f9;
  padding: .8rem
  min-width: 12rem;
  left: 5rem;
  border-radius: 5px;
  h3, p {
    margin: 0;
    align-items: center;
    perspective: 100px;
  }

  > div {
    display: flex;
    justify-content: space-around;
    > img {
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }

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
