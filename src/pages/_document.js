import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#000000' />
          <link rel='icon' href='/favicon.svg' />
          <link
            rel='stylesheet'
            href='//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css'
          />
          <script src='//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-NDSNHVS');`
            }}
          />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html:
              `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDSNHVS"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}></noscript>
          <div id='page-transition' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  }
}

export default MyDocument
