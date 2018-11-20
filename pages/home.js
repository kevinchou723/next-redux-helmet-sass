import React from 'react'
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import Navigation from '../components/navigation'
import CloseSvg from '../assets/images/close.svg';

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
        <div className='home__close-icon-wrapper'>
          <CloseSvg/>
          {`<-- I'm a SVG`}
        </div>
        This is Home page! I am Green!
      </div>
    )
  }
}

export default withRouter(Home)
