/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import pin from '../img/pin-ic.svg'

export default class => {
  return (
    <Outer focus={props.focus}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          props.handleClick(props.place)
        }}
      >
        <img src={pin} alt="pin" />
      </a>
        {this.props.focus && (
            <div>
                Details
            </div>
        )}
    </Outer>
  )
}

const Outer = styled.div`
  img {
    width: 2.4rem;
    height: 3rem;
    transition: all 1s ease;
    transform: ${props => (props.focus ? 'scaleX(2) scaleY(2)' : '')};
  }

  a:focus {
    img {
      transform: scaleX(2) scaleY(2);
    }
  }
`