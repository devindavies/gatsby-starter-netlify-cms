import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import MiniHero from '../components/MiniHero'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Footer from '../components/Footer'
import styled from 'styled-components'

const ContactIntro = styled.p`
  font-size: 1.5rem;
  text-align: left;
  margin-top: 60px;
  margin-left: 25%;
`

const ContactPage = () => (
  <Layout>
    <MiniHero
      image={require('../images/Web - x1440/Home.jpg')}
      title="CONTACT"
    />

    <ContactForm />
    <Map />
    <Footer />
  </Layout>
)

export default ContactPage
