import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import NavBar from '../../components/NavBar.js'
import Footer from '../../components/Footer.js'


export default function PieceOne() {

  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.worksPic}>
          <a href='/' style={{ color: 'blue', marginBottom: '2.5rem', alignSelf: 'start', marginLeft: '2.5rem' }}>Back to Home Page</a>
          <Image
            src="https://thumbs.dreamstime.com/b/leafy-sea-dragon-close-up-30185536.jpg"
            alt="portrait of the young artist"
            width={480}
            height={398}
            layout="intrinsic"
          />
          <h1 style={{ color: 'black', marginTop: '3rem' }}>Name of Piece</h1>
          <h2 style={{ color: 'black', fontWeight: 'lighter', marginBottom: '5rem' }}>Description: i.e Medium, Dimensions, etc</h2>
        </div>
        <div style={styles.worksInfo}>

        </div>
      </div>
      <Footer />
    </>
  )
}
