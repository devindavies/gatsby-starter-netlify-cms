import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Intro from '../components/Intro'

import MiniHero from '../components/MiniHero'
import Card from '../components/Card'
import Questions from '../components/Questions'
import Tile from '../components/Tile'
import Footer from '../components/Footer'
import styled from 'styled-components'

const VisitPage = () => (
  <Layout>
    <MiniHero
      image={require('../images/Web - x1440/Home.jpg')}
      title="VISIT US"
    />
    <Intro
      description="We recognize that visiting a church for the first time can be slightly intimidating, 
    especially when you’re unsure of what to expect. We would love to share with you about our Sunday 
    services so that you have an idea of what to expect and we can put your mind at ease. 
    lease don’t hesitate to contact us at connect@newhopechristianchapel.org if you have any questions prior to your visit!"
    />
    <div className="VisitMain">
      <h2>A Typical Sunday at New Hope</h2>
      <div className="VisitContainer">
        <Tile
          icon="schedule"
          title="Time"
          description="Our services begin around 10:30 AM and end around 12:00 PM, with space
        to mingle and chat both before and after the service."
        />
        <Tile
          icon="place"
          title="Location"
          description="We are located on Route 106, just beyond the intersection of Rt. 106 and
        Rt. 138."
        />
        <Tile
          icon="wc"
          title="Dress"
          description="There is no particular dress code at New Hope; come as you are and wear
        whatever you’d like!"
        />
        <Tile
          icon="info"
          title="Service Overview"
          description="Our services sometimes vary in order, but always include the following
        components: corporate prayer, corporate worship through song, a time of
        sharing upcoming events, a time of giving (with no expectation for
        visitors to give), Communion*, sermon teaching from the Bible,
        children’s Sunday School lessons. To learn more about our lead pastor,
        click here."
        />
        <Tile
          icon="child_care"
          title="Children"
          description="New Hope offers children’s Nursery & Sunday School classes during the
        sermon portion of the worship service. At that time, children are
        invited downstairs to our classrooms where they are taught from the
        Bible at an age-appropriate level that meets them where they are at
        developmentally. To learn more about our children’s classes, click here."
        />
        <Tile
          icon="music_note"
          title="Music"
          description="New Hope’s worship music is led by a live music team each Sunday,
        including contemporary songs and a mix of traditional hymns."
        />
        <Tile
          icon="directions_car"
          title="Parking"
          description="Plenty of off-street parking is available in our parking lot, which has
        parking spots in the front, on the side, and in the rear of the chapel
        building. Parking on the street or in the traffic circle is prohibited."
        />
        <Tile
          icon="accessible"
          title="Accessibility"
          description="New Hope’s building is handicap accessible and there are handicap
        parking spots both in the front of the chapel and in the rear. The front
        entrance brings you directly into the entryway and provides access to
        the sanctuary. The rear entrance brings you directly into the grandroom
        and provides access to the classrooms, the kitchen, and the office.
        There is no elevator inside the building, only stairs to go between
        floors once inside."
        />
        <Tile
          icon="favorite"
          title="All Are Welcome"
          description="Our hope is that everyone would feel welcome at New Hope. We hope you
        will come and visit sometime soon so we can meet and you can see for
        yourself how God is moving in this local church body!"
        />
      </div>
    </div>
    <Footer />
  </Layout>
)

export default VisitPage
