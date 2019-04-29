import React from 'react'
import styled from 'styled-components'

const PersonContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`

const PersonBadge = styled.img`
  width: 18vw;
  margin: 0 auto;
  display: block;

  @media (max-width: 1024px) {
    display: block;
    width: 40vw;
    margin: auto;
    padding: 0;
  }
`

const PersonTitleGroup = styled.div`
  vertical-align: top;
  text-align: center;

  @media (max-width: 1024px) {
    display: block;
    width: auto;
    margin: auto;
    text-align: center;
  }
`

const PersonTitle = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 0;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`
const PersonDescription = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
`

const PersonBio = styled.p`
  font-size: 1.125rem;
`
const PersonContact = styled.a`
  font-size: 1.25rem;
  margin-top: 10px;
  color: #1f8dbc;
`

const Person = props => (
  <PersonContainer>
    <PersonBadge src={props.image} />
    <PersonTitleGroup>
      <PersonTitle>{props.name}</PersonTitle>
      <PersonDescription>{props.title}</PersonDescription>
      <PersonContact className="LearnMore" href={'mailto:' + props.contact}>
        Contact {props.firstname}
      </PersonContact>
    </PersonTitleGroup>

    <PersonBio>{props.bio}</PersonBio>
  </PersonContainer>
)

export default Person
