import Head from 'next/head'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import SelectCity from '@/components/SelectCity/NormalSelectCity'
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
      <Row className="justify-content-center pt-3">
        <Col sm={12} md={9} lg={8}>
          <SelectCity onSelect={(city) => console.log(city)} />
        </Col>
      </Row>
    </div>
  )
}
