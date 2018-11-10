import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'

class Home extends React.Component {
  static getInitialProps ({ store, isServer, req }) {

    if (req) {
      Helmet.renderStatic()
    }
    return {
      isServer,
      title: 'HOME TITLE!',
      description: 'HOME DESCRIPTION!'
    }
  }

  render () {
    const { title, description } = this.props
    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description }
    ]
    return (
      <div className='home__container'>
        <Helmet
          title={title}
          meta={meta}
        />
        <Navigation />
        This is Home page! I am Green!
      </div>
    )
  }
}

export default Home
