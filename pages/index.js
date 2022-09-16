import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar.js';
import MySpaceHome from '../components/MySpaceHome.js'
import Footer from '../components/Footer.js'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Holtz, visual artist working to explore the complexities and simplicities of life, through a variety of mediums and styles.</title>
        <meta name='keywords' content='Jason, Holtz, Artist, Petaluma, Visual Art, Nature, Graffiti, Art, Painting, Painter, Drawing, Linework'></meta>
        <meta name='description' content='Artist Jason Holtz Homepage, find contact information and browse his works of art'></meta>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <MySpaceHome />
      </div>
      <Footer />
    </>
  )
}
