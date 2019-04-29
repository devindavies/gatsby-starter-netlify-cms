import React from 'react'
import styled from 'styled-components'

const Slide = styled.div`
  min-width: 300px;
  min-height: 300px;
  margin: 40px 10px;
`
const SlideImage = styled.div`
  background: url(${props => props.slide});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.6, 1);

  &:hover {
    transform: scale(1.75, 1.75);

    box-shadow: 0 30px 50px rgba(0, 0, 0, 1);
  }
`

const Announcement = props => (
  <Slide>
    <SlideImage slide={props.slide} />
  </Slide>
)

export default Announcement
