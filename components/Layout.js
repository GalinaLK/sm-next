import Navbar from './Navbar'
import MetaData from './MetaData'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <MetaData />
      <Navbar />
        <main className={styles.main}>
          {children}
        </main>
      <Footer/>
    </>
  )
}

export default Layout