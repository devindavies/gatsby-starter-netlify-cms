import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import MailchimpSignUp from '../components/MailchimpSignUp'

const StyledEvents = styled.section`
  background-color: #2b2b3a;
  margin: 0;

  h1 {
    margin: 0;
    padding: 40px 40px 0;
    color: white;
    font-size: 3.5rem;
  }

  h3 {
    margin: 40px 0 0 0;
    padding: 0 40px 40px;
    font-size: 32px;
    vertical-align: middle;
    color: white;
  }

  i {
    font-size: 32px;
    vertical-align: middle;
    color: white;
    margin-right: 10px;
  }
`

const Slides = styled.div`
  min-width: 100%;
  min-height: 400px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: -100px 0;
  padding: 100px 0;

  div:first-of-type {
    margin-left: 40px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    margin: -250px 0;
    padding: 250px 0;
  }
`

const Events = ({ data }) => (
  <StyledEvents>
    <h1> News & Events</h1>
    <Slides>
      {data.allContentfulAnnouncements.edges[0].node.urls.map(url => (
        <Announcement slide={url} />
      ))}
    </Slides>
    <h3>
      <i class="material-icons">event_note</i>Sign up for our weekly newsletter
    </h3>
    <MailchimpSignUp />
  </StyledEvents>
)

export default Events
