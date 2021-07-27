import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={utilStyles.headingMd}>
            <center>
              <p>Computer Science and Photography graduate looking for full time opportunities and freelance work.</p>
              <Link href="/aboutme"><a>about</a></Link> | <a href="https://github.com/JarrettAzar">github</a> | <a href="https://linkedin.com/in/JarrettAzar">linkedin</a> | <a href="mailto:jarrett.b.azar@gmail.com">contact</a>
            </center>
        </section>
    </Layout>
  )
}