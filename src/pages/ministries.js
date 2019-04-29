import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import MiniHero from '../components/MiniHero'
import Intro from '../components/Intro'
import Card from '../components/Card'
import staticdata from '../../staticdata.json'
import Footer from '../components/Footer'

const MinistriesPage = ({ data }) => (
  <Layout>
    <MiniHero
      image={require('../images/Web - x1440/Home.jpg')}
      title="MINISTRIES"
    />
    <Intro
      title=""
      description='"For you were called to freedom, brothers. 
      Only do not use your freedom as an opportunity for the flesh, but through love serve one another."  -  Galations 5:13'
    />
    <div className="Ministries">
      {staticdata.ministries.map(ministry => (
        <Card
          image={ministry.background}
          title={ministry.title}
          description={ministry.description}
          email={ministry.email}
          float={ministry.float}
        />
      ))}
    </div>
    <Footer />
  </Layout>
)

export default MinistriesPage
