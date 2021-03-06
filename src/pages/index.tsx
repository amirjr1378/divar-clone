import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'

import PageContainer from '@/components/layout/container'
import SelectCity from '@/components/SelectCity/NormalSelectCity'
import { changeCity } from '@/redux/features/city/citySlice'
import { useAppDispatch, useCity } from '@/redux/hooks'

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const city = useCity()

  useEffect(() => {
    if (city?.id) router.push(`/search?cityID=${city.id}`)
  }, [city?.id])

  return (
    <div>
      <Head>
        <title>Divar clone</title>
      </Head>

      <PageContainer>
        <SelectCity onSelect={(city) => dispatch(changeCity(city))} />
      </PageContainer>
    </div>
  )
}
