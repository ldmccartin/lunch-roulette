import Head from 'next/head'
import RouletteTable from '@components/roulette-table'

export default function Home() {
  return (
    <div lang="en" className="flex justify-center dark">
      <Head>
        <title>Lunch Roulette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className='text-4xl mb-8 font-mono'>Lunch Roulette</h1>
        <RouletteTable />
      </main>
    </div>
  )
}
