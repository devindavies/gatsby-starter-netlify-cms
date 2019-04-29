import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Sermon from '../components/Sermon'
import Events from '../components/Events'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="Hero">
      <div />
      <h1>
        Carrying on Christ’s mission <br />
        to love God and love our neighbor
      </h1>
      <div className="Visit">
        <Link to="/visit">PLAN A VISIT</Link>
      </div>
    </div>
    <Sermon />
    <Events data={data} />
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulAnnouncements(limit: 1) {
      edges {
        node {
          urls
        }
      }
    }
  }
`
