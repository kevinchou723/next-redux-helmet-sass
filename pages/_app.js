import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import '../assets/styles/index.scss'

import Loader from '../components/loader'

/*
  These are options for the page transitions.
  if you dont want page transition animiation,
  just remove it from this component and uninstall
  next-page-transitions from package.json
*/

class Application extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const { Component, pageProps, store } = this.props
    const TIMEOUT = 400;
const transitionOpts = {
  timeout: TIMEOUT,
  classNames: 'page-transition',
  loadingComponent: <Loader />,
  loadingDelay: 500,
  loadingTimeout: {
    enter: TIMEOUT,
    exit: 0
  },
  loadingClassNames: 'loading-indicator'
}
    return (
      <Container>
        <Provider store={store}>
          <PageTransition {...transitionOpts}>
            <Component {...pageProps} />
          </PageTransition>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(Application)
