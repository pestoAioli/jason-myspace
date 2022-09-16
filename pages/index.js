import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar.js';
import MySpaceHome from '../components/MySpaceHome.js'
import Footer from '../components/Footer.js'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Holtz' Homepage</title>
        <meta name='author' content='Jason Holtz'></meta>
        <meta name='description' content='Artist Jason Holtz Homepage, find contact information and browse his works of art'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:title' content='Jason Holtz, Visual Artist'></meta>
      </Head>
      <div className={styles.container}>
        <NavBar />
        <MySpaceHome />
      </div>
      <Footer />
    </>
  )
}
