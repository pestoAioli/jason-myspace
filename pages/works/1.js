import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import NavBar from '../../components/NavBar.js'
import Footer from '../../components/Footer.js'
import WorksPage from '../../components/WorksPage.js'

export default function PieceOne() {

  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <WorksPage />
      </div>
      <Footer />
    </>
  )
}
