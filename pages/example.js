import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import Navigation from '../components/navigation'
import ExampleContainer from '../containers/example-container';

const exampleImage = 'https://cdn2.thecatapi.com/images/4p.jpg'

/*
 Here we included example for loading
 animation with page transition
*/
class ExamplePage extends Component {
  static pageTransitionDelayEnter = true
  static async getInitialProps ({ req, query }) {
    if (req) {
      Helmet.renderStatic()
    }
    return {
      title: 'EXAMPLE TITLE!',
      description: 'EXAMPLE DESCRIPTION!',
      id: query.id
    }
  }

  state = {
    loaded: false
  }

  componentDidMount () {
    // this is just a simple example to show loading component
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000)
  }

  componentWillUnmount () {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render() {
    if (!this.state.loaded) return null

    const { title, description, router, id } = this.props

    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:image', content: exampleImage },
      { property: 'og:description', content: description }
    ]

    return (
      <div className='example__container'>
        <Helmet
          title={title}
          meta={meta}
        />
        <Navigation />
        {id && <h1>{`My id is ${id}`}</h1>}
        this is Example page! I am Red!
        <ExampleContainer/>
      </div>
    )
  }
}

export default withRouter(ExamplePage)
