import React from 'react'
import styled from 'styled-components'

const MiniHeroContainer = styled.div`
  width: 100%;
  height: 400px;
  line-height: 400px;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }
  @media (max-width: 1440px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1024px) {
    height: 300px;
    line-height: 300px;
  }

  @media (max-width: 640px) {
    height: 250px;
    line-height: 250px;
    h1 {
      font-size: 2rem;
      animation: HeroAnimation 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 0;
    }
  }

  @keyframes HeroAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
const MiniHeroGroup = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
`

const MiniHeroTitle = styled.h1``

const MiniHero = props => (
  <MiniHeroContainer image={props.image}>
    <MiniHeroGroup>
      <MiniHeroTitle>{props.title}</MiniHeroTitle>
    </MiniHeroGroup>
  </MiniHeroContainer>
)

export default MiniHero
