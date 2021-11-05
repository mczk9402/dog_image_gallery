import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import Container from 'src/styles/l-container.module.scss';
import { Main } from 'src/components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Container['l-container']}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}