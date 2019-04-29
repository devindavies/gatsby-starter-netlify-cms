import React from 'react'
import styled from 'styled-components'
import background from '../images/Web - x1440/trianglify.svg'

const FooterContainer = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  max-width: 100%;
  white-space: nowrap;

  @media (max-width: 1440px) {
    p {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`

const FooterGroup = styled.div`
  display: flex;
  padding-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    .separator {
      display: none;
    }
  }
`

const FooterBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  &:nth-child(3) {
    flex: 0;
  }

  &:nth-child(3) > p {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:first-child > p {
    margin-left: auto;
    margin-right: 10px;
  }

  &:last-child > p {
    margin-right: auto;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
    &:first-child > p {
      margin: auto;
    }
    &:last-child > p {
      margin: auto;
    }
  }
`

const SocialGroup = styled.div`
  height: 100%;
  margin: 30px;
  display: grid;
  grid-column: 3;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: center;

  a {
    border: none;
    padding: 0 1rem;
  }

  img {
    height: 30px;
  }
`
const SubContainer = styled.div`
  background-color: #2b2b3a;
  height: 100%;
  hr {
    width: 90%;
    border-color: #00897b;
  }

  img {
    margin: 20px 0 0 10vw;
  }

  p {
    font-size: 0.2rem;
    margin: 0 10vw;
  }
`

const SubGroup = styled.div`
  padding: 30px 0;
  color: #00897b;
`

const Footer = props => (
  <FooterContainer>
    <FooterGroup>
      <FooterBox>
        <p>Sundays @ 10:45am</p>
      </FooterBox>

      <p className="separator">|</p>

      <FooterBox>
        <p>6 Meadowhill Ct. South Easton, MA</p>
      </FooterBox>

      <p className="separator">|</p>

      <FooterBox>
        <p>508-230-9504</p>
      </FooterBox>
    </FooterGroup>
    <SocialGroup>
      <a href="https://twitter.com/nhcc">
        <img src={require('../images/social/twitter.svg')} />
      </a>
      <a href="https://www.facebook.com/NewHopeChristianChapelSouthEastonMA/">
        <img src={require('../images/social/facebook.svg')} />
      </a>
      <a href="https://www.instagram.com/newhopechristianchapel/">
        <img src={require('../images/social/instagram.svg')} />
      </a>
    </SocialGroup>

    <SubContainer>
      <SubGroup>
        <hr />
        <img
          src={require('../images/Logo/Green (with text).svg')}
          height="45"
        />
        <p>Copyright © 2019 New Hope Christian Chapel. All rights reserved.</p>
      </SubGroup>
    </SubContainer>
  </FooterContainer>
)

export default Footer
