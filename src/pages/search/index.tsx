import { useRouter } from 'next/dist/client/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import ApiService from '@/apiService'
import PageContainer from '@/components/containers/layout/PageContainer'
import Loading from '@/components/containers/Loading'
import ProductCard from '@/components/product/ProductCard'
import { IProduct } from '@/types/product'

function Search(): ReactElement {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const cityID = router.query.cityID

  useEffect(() => {
    setLoading(true)
    ApiService.getProducts()
      .then((newProducts) => setProducts(newProducts))
      .finally(() => setLoading(false))
  }, [cityID])

  return (
    <PageContainer>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      )}
    </PageContainer>
  )
}

export default Search
