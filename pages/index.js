import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar.js';
import MySpaceHome from '../components/MySpaceHome.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <MySpaceHome />
      </div>
      <Footer />
    </>
  )
}
