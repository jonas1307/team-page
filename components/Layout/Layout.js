import Head from 'next/head';
import styles from './Layout.module.css';
import Link from 'next/link';

const Layout = ({children, title = 'Our Team'}) => {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>

        <h1 className={styles.logo}>The creative crew</h1>
        
        <div className={styles.description}>
          <h2 className={styles.title}>Who we are</h2>
          <div className={styles.text}>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</div>
        </div>

      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <Link href="https://jonasamorim.dev">jonasamorim.dev</Link>&nbsp;@ DevChallenges.io
      </footer>

    </div>
  )
}

export default Layout;