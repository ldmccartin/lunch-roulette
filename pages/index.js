import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import ParticipantList from '@components/participants-list'

export default function Home() {
  return (
    <div lang="en" className="container dark">
      <Head>
        <title>Lunch Roulette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header title="Lunch Roulette" />
        <ParticipantList />
      </main>

      <Footer />
    </div>
  )
}
