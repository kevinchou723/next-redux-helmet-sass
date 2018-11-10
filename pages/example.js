import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import Navigation from '../components/navigation'
import ExampleContainer from '../containers/example-container';

const exampleImage = 'https://cdn2.thecatapi.com/images/4p.jpg'

class ExamplePage extends Component {
  static async getInitialProps ({ req }) {
    if (req) {
      Helmet.renderStatic()
    }
    return {
      title: 'EXAMPLE TITLE!',
      description: 'EXAMPLE DESCRIPTION!'
    }
  }

  render() {
    const { title, description, router } = this.props
    console.log('this is router values', router)
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
        this is Example page! I am Red!
        <ExampleContainer/>
      </div>
    )
  }
}

export default withRouter(ExamplePage)
