import React, { ReactElement } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import Loading from '@/components/containers/Loading'
import type { ICity } from '@/types'

import { useCities } from './useCities'

interface Props {
  onSelect: (city: ICity) => void
}

function SelectCity(props: Props): ReactElement {
  const { onSelect } = props
  const [cities, searchCity, loading] = useCities()

  return (
    <>
      <Form.Group className="pl-3">
        <Form.Control
          type="text"
          placeholder="جستجوی سریع نام شهر..."
          size="lg"
          onChange={(e) => {
            searchCity(e.target.value)
          }}
        />
      </Form.Group>
      {loading ? (
        <Loading />
      ) : (
        <Row className="mt-3">
          {cities?.length
            ? cities?.map((city) => (
                <Col key={city.id} sm={6} md={3} lg={2} className="mb-4">
                  <Button
                    variant="outline-primary"
                    className="d-block w-100"
                    onClick={() => onSelect(city)}
                    size="lg"
                  >
                    <div className="text-truncate">{city.name}</div>
                  </Button>
                </Col>
              ))
            : null}
        </Row>
      )}
    </>
  )
}

export default SelectCity
