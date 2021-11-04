import NavBar from './NavBar'
import MetaData from './MetaData'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <MetaData />
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout