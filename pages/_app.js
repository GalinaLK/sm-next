import '../styles/globals.css'
import Layout from '../components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {

  return (
       <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}