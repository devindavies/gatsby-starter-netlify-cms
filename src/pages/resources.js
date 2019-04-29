import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import MiniHero from '../components/MiniHero'
import Sermons from '../components/Sermons'
import Footer from '../components/Footer'

const ResourcesPage = () => (
  <Layout>
    <MiniHero
      image={require('../images/Web - x1440/Home.jpg')}
      title="RESOURCES"
    />
    <h1 style={{ 'text-align': 'center' }}>Sermons</h1>
    <Sermons />
    <Footer />
  </Layout>
)

export default ResourcesPage
