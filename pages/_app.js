import Layout from '../components/Layout'
import '../styles/globals.scss'
import Head from 'next/head'
import {favicon} from "../public/favicon.ico"

function MyApp({ Component, pageProps, children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <title>LOI TAI</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default MyApp
