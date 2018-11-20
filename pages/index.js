import React from 'react'
import Helmet from 'react-helmet'
import Navigation from '../components/navigation'
import cat from '../assets/images/cat.jpg'
class Index extends React.Component {
  static getInitialProps ({ store, isServer, req }) {
    if (req) {
      Helmet.renderStatic()
    }
    return {
      isServer,
      title: 'Index TITLE!',
      description: 'Index DESCRIPTION!'
    }
  }

  render () {
    const { title, description } = this.props

    const meta = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description }
    ]

    console.log('cat', cat);
    return (
      <div className='index__container'>
        <Helmet
          title={title}
          meta={meta}
        />
        <Navigation />
        <img className='index__cat-wrapper' src={cat}/>
        <p>This is Index page! I am Black!</p>
      </div>
    )
  }
}

export default Index
