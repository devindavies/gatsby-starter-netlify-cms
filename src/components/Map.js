import React from 'react'
import styled from 'styled-components'

const NewHopeMap = styled.iframe`
  border: 0;
  margin: 60px 0;
  margin-left: 25%;
  width: 50vw;
  height: 30vw;
`

const Map = props => (
  <NewHopeMap
    frameBorder="0"
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJub4l3-GO5IkR5UNltw7imxg&key=AIzaSyB8-eQAlCFlKc0zBkfgToQc4tTtatdVCLQ"
    allowfullscreen
  />
)

export default Map
