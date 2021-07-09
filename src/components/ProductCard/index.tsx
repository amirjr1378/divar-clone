// TODO: complete this component
import React, { ReactElement } from 'react'
import s from './styles.module.scss'
import { ProductCardProps } from './types'

function ProductCard(props: ProductCardProps): ReactElement {
  const { id, name, price, image } = props
  return (
    <div className={s.productCard__container}>
      id: {id}
      name: {name}
      price: {price}
      image: {image}
    </div>
  )
}

export default ProductCard
