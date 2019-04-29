import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 100%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const CardGroup = styled.div`
  padding: 120px 120px 30px;
  position: relative;
  text-align: center;
  color: white;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 768px) {
    padding: 90px 60px 0;
  }
`

const CardTitleGroup = styled.div`
  width: 50%;
  float: ${props => props.float};
  vertical-align: middle;
  padding-left: 60px;
  margin-bottom: 60px;
  display: inline-block;
  text-align: left;

  @media (max-width: 960px) {
    float: none;
    text-align: center;
    width: 100%;
    padding: 0 60px;
  }

  @media (max-width: 640px) {
    padding: 0;
  }
`

const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 3.25rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`
const CardDescription = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.375rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 640px) {
    text-align: left;
    font-size: 1rem;
  }
`

const Card = props => (
  <CardContainer image={props.image}>
    <CardGroup>
      <CardTitleGroup float={props.float}>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardTitleGroup>
    </CardGroup>
  </CardContainer>
)

export default Card
