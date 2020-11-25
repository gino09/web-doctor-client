import '../styles/globals.css'
import '../styles/w3.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from 'react'
import Layout from '../components/Layout'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [auth,setAuth] = React.useState(true)
  return <Layout auth={auth}><Component {...pageProps} /></Layout>
}

export default MyApp
