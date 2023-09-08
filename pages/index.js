import Head from 'next/head'
import ParticipantList from '@components/participants-list'

export default function Home() {
  return (
    <div lang="en" className="container dark">
      <Head>
        <title>Lunch Roulette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <ParticipantList />
      </main>
    </div>
  )
}
