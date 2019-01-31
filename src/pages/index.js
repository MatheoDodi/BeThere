import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Search from '../components/search/search'
import Grid from '../components/grid/Grid'

class IndexPage extends React.Component {
  state = {
    events: {},
    loadedEvents: false,
  }

  setEventsHandler = events => this.setState({ events, loadedEvents: true })

  render() {
    console.log(this.state.events)
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero shrink={this.state.loadedEvents} />
        <Search setEvents={events => this.setEventsHandler(events)} />
        {this.state.events._embedded && (
          <Grid events={this.state.events._embedded.events} />
        )}
      </Layout>
    )
  }
}

export default IndexPage
