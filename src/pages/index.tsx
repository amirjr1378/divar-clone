import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import SelectCity from '@/components/SelectCity/NormalSelectCity'
import { changeCity } from '@/redux/features/city/citySlice'
import { useAppDispatch, useCity } from '@/redux/hooks'

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const city = useCity()

  useEffect(() => {
    if (city?.id) router.push(`/search?cityID=${city.id}`)
  }, [city])

  return (
    <div>
      <Head>
        <title>Divar clone</title>
      </Head>
      <Row className="justify-content-center pt-3">
        <Col sm={12} md={9} lg={8}>
          <SelectCity onSelect={(city) => dispatch(changeCity(city))} />
        </Col>
      </Row>
    </div>
  )
}
