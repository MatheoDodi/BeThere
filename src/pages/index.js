import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Search from '../components/search/search'

class IndexPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Search />
      </Layout>
    )
  }
}

export default IndexPage
