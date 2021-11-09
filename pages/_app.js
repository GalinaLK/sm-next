import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
       <Layout>
          <Component {...pageProps} />
      </Layout>

    </Provider>
  )
}