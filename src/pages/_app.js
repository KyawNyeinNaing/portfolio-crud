import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import '../styles/globals.scss'
import { GlobalStyle } from '../components/core'

// import PageChange from '../components/PageChange/PageChange'

import 'assets/css/nextjs-material-dashboard.css?v=1.1.0'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Router.events.on('routeChangeStart', url => {
//   // console.log(`Loading: ${url}`)
//   document.body.classList.add('body-page-transition')
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById('page-transition')
//   )
// })

// Router.events.on('routeChangeComplete', () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
//   document.body.classList.remove('body-page-transition')
// })

// Router.events.on('routeChangeError', () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
//   document.body.classList.remove('body-page-transition')
// })

const App = props => {
  const { Component, pageProps } = props

  useEffect(() => {
    const comment = document.createComment(`
      Thet Pai's portfolio
    `)
    document.insertBefore(comment, document.documentElement)
  }, [])


  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <title>Admin Panel | Portfolio</title>
        {/* <script src='https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'></script> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )

}

export default App

App.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}