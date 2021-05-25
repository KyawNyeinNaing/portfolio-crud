import React from 'react'
import Head from 'next/head'

const SEO = ({ description, keywords, title }) => (
  <Head>
    <title>{title} | Portfolio</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(', ')} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="My Portfolio" />
    <meta property="og:url" content="http://thetpai.vercel.app/" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@ThetPai95" />
    <meta name="twitter:image" content="https://twitter.com/ThetPai95/photo" />
    <meta property="og:image" content="" />
    <link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" type="image/png" href="/icons/icon-72x72.png" />
  </Head>
);

SEO.defaultProps = {
  description: 'My Portfolio',
  keywords: [
    'Thet Pai',
    'portfolio',
    'Kyaw Nyein Naing',
    "thet pai's portfolio",
    'portfolio for work',
    'styled-components',
    'styledcomponents',
    'admin-template for portfolio',
    'react-admin-dashboard for portfolio',
    'react-admin-panel for portfolio',
    'react-admin-component for portfolio',
    'portfolio with nextjs',
  ],
};

export default SEO
