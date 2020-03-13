import 'bootswatch/dist/sketchy/bootstrap.min.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Ian Copp" />
      <meta
        name="description"
        content={`"Those sure are some deals that exist."`}
      />
      <meta name="image" content="/logo.png" />
      <meta itemProp="name" content="literally.deals" />
      <meta
        itemProp="description"
        content={`"Those sure are some deals that exist."`}
      />
      <meta itemProp="image" content="/logo.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="literally.deals" />
      <meta
        name="twitter:description"
        content={`"Those sure are some deals that exist."`}
      />
      <meta name="twitter:creator" content="@copp_ian" />
      <meta name="twitter:image:src" content="/logo.png" />
      <meta name="og:title" content="literally.deals" />
      <meta
        name="og:description"
        content={`"Those sure are some deals that exist."`}
      />
      <meta name="og:url" content="https://literally.deals" />
      <meta name="og:site_name" content="literally.deals" />
      <meta name="fb:admins" content="1340190059" />
      <meta name="fb:app_id" content="468200460029799" />
      <meta name="og:image" content="/logo.png" />
      <meta name="og:type" content="website" />
      <title>literally.deals</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>
)
export default App
