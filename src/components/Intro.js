import React from 'react'
import styled from 'styled-components'

const IntroContainer = styled.div`
  width: 100%;
  }
`
const IntroGroup = styled.div`
  padding: 60px 180px;
  text-align: center;
  color: #363636;

  @media (max-width: 768px) {
    padding: 40px 40px;
  }
`

const IntroTitle = styled.h1`
  font-weight: 700;
  font-size: 3.25rem;
  margin-top: 60px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`
const IntroDescription = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const Intro = props => (
  <IntroContainer>
    <IntroGroup>
      <hr />
      <IntroTitle>{props.title}</IntroTitle>
      <IntroDescription>{props.description}</IntroDescription>
      <hr />
    </IntroGroup>
  </IntroContainer>
)

export default Intro
