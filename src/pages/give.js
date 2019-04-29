import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Intro from '../components/Intro'
import MiniHero from '../components/MiniHero'
import Footer from '../components/Footer'
import styled from 'styled-components'

const GivePage = () => (
  <Layout>
    <MiniHero image={require('../images/Web - x1440/Home.jpg')} title="GIVE" />
    <Intro
      title=""
      description='"For where your treasure is, there your heart will be also."-  Matthew 6:21'
    />
    <p className="GiveText">
      If you would like to make a donation to the mission of New Hope Christian
      Chapel, you may click on the Donate button below and you will be directed
      to a secure transaction form to complete the donation. 100% of all
      donations are used for New Hope’s continuing ministry expenses. All gifts
      are greatly appreciated and will be put to good use as we strive to carry
      on Christ’s mission to love God and serve our neighbor. Thank you for
      partnering with us in the ministry and gospel of Jesus Christ! God bless.
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_donations" />
      <input
        type="hidden"
        name="business"
        value="pastordave@newhopechristianchapel.org"
      />
      <input type="hidden" name="currency_code" value="USD" />
      <input
        className="DonateButton"
        type="image"
        src={require('../images/Buttons/Primary Button Default.png')}
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
    <p className="GiveText">
      Check donations may be made payable to New Hope Christian Chapel and can
      be mailed to the address below.
    </p>
    <p className="GiveText">
      New Hope Christian Chapel 6 Meadowhill Ct. S. Easton, MA 02375
    </p>
    <p>
      Chapel of New Hope, Inc. is a 501c(3) nonprofit organization. Federal Tax
      ID #22-2936649.
    </p>

    <Footer />
  </Layout>
)

export default GivePage
