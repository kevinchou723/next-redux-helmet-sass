import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import Navigation from '../components/navigation'
import ExampleContainer from '../containers/example-container'

const exampleImage = 'https://cdn2.thecatapi.com/images/4p.jpg'

class ExamplePage extends Component {
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

  render() {
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
