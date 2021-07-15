import Head from 'next/head'
import { useEffect } from 'react'

import { useCity } from '@/redux/hooks'

export default function Home() {
  const city = useCity()

  useEffect(() => {
    if (city) alert('city is selected')
  }, [])

  return (
    <div>
      <Head>
        <title>Divar clone</title>
      </Head>
    </div>
  )
}
