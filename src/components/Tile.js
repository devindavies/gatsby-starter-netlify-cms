import React from 'react'
import styled from 'styled-components'

const TileContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.2);
`

const TileTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 40px auto;

  i {
    font-size: 40px;
    color: #00897b;
  }
`

const TileTitle = styled.h3`
  font-size: 40px;
  color: #363636;
  line-height: 1;
  margin: 0 0 0 10px;
  vertical-align: center;
`
const TileDescription = styled.p`
  font-size: 20px;
  color: #363636;
`

const Tile = props => (
  <TileContainer>
    <TileTitleGroup>
      <i class="material-icons">{props.icon}</i>
      <TileTitle>{props.title}</TileTitle>
    </TileTitleGroup>
    <TileDescription>{props.description}</TileDescription>
  </TileContainer>
)

export default Tile
