import React from 'react'
import styled from 'styled-components'

const QuestionsTitle = styled.h1`
  font-weight: 700;
  font-size: 3.25rem;
  margin: 60 40px 0 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const QuestionsDescription = styled.p`
  margin: 30px 20vw;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Questions = props => (
  <div>
    <QuestionsTitle>Frequently asked questions</QuestionsTitle>
    <QuestionsDescription>
      We recognize that visiting a church for the first time can be slightly
      intimidating, especially when you’re unsure of what to expect. We would
      love to answer a few frequently asked questions so that you have an idea
      of what to expect and we can put your mind at ease.
    </QuestionsDescription>
  </div>
)

export default Questions
