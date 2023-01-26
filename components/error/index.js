import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'}>
      <Head>
        <title>404 — Uzinfocom Open Source</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>Ushbu sahifa topilmadi.</h1>

          <p>
            <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
              <p>
                Agar DDoS ingiz o'xshamayotgan bo'lsa, demak boshqa teshikga
                burningizni tiqishga harakat qilayabsiz...
              </p>

              <footer>
                — CryPTON32,{' '}
                <Link external href="https://t.me/CryPTON32">
                  <cite>Buyuk Burun Tiqar</cite>
                </Link>
              </footer>
            </blockquote>
          </p>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || '?'}</span>
          <p>Xatolik yuz berdi.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
