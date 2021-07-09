// TODO: complete this component
import Image from 'next/image'
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
      <Image
        src={image || '/img/default-image.jpg'}
        width={135}
        height={136}
        alt="product"
      />
    </div>
  )
}

export default ProductCard
