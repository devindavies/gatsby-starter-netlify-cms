import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import MiniHero from '../components/MiniHero'
import Intro from '../components/Intro'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Person from '../components/Person'
import staticdata from '../../staticdata.json'

const AboutPage = () => (
  <Layout>
    <MiniHero
      image={require('../images/Web - x1440/Home.jpg')}
      title="ABOUT US"
    />
    <Intro
      title="Our Mission"
      description="New Hope is a non-denominational local church in southeastern
      Massachusetts striving to faithfully obey God’s Word, to follow His
      Spirit’s leading, and to advance His Kingdom everywhere we go with the
      gospel of Jesus Christ."
    />
    <Card
      image={require('../images/Chapel.jpg')}
      float="right"
      title="Our History"
      description="New Hope is a non-denominational local church in southeastern
      Massachusetts striving to faithfully obey God’s Word, to follow His
      Spirit’s leading, and to advance His Kingdom everywhere we go with the
      gospel of Jesus Christ."
    />
    <Card
      image={require('../images/Web - x1440/14dark.jpg')}
      float="left"
      title="Our Beliefs"
      description="New Hope is a non-denominational local church in southeastern
      Massachusetts striving to faithfully obey God’s Word, to follow His
      Spirit’s leading, and to advance His Kingdom everywhere we go with the
      gospel of Jesus Christ."
    />
    <div className="Leaders">
      <h1>Our Leadership</h1>
    </div>
    <div className="People">
      {staticdata.leaders.map(leader => (
        <Person
          name={leader.name}
          firstname={leader.firstname}
          title={leader.title}
          contact={leader.contact}
          image={leader.image}
          bio={leader.bio}
        />
      ))}
    </div>
    <Footer />
  </Layout>
)

export default AboutPage
