import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function WorksPage() {
  return (
    <div className={styles.worksPic}>
      <Link href="/">
        <a style={{ color: 'blue', marginBottom: '2.5rem', alignSelf: 'start', marginLeft: '2.5rem' }}>Back to Home Page</a>
      </Link>
      <Image
        src="https://thumbs.dreamstime.com/b/leafy-sea-dragon-close-up-30185536.jpg"
        alt="portrait of the young artist"
        width={480}
        height={398}
        layout="intrinsic"
      />
      <h1 style={{ color: 'black', marginTop: '3rem' }}>Name of Piece</h1>
      <h2 style={{ color: 'black', fontWeight: 'lighter', marginBottom: '5rem' }}>Description: i.e Medium, Dimensions, etc, this page can look however you want</h2>
    </div>
  )
}
