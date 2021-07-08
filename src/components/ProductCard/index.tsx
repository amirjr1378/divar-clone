// TODO: complete this component
import React, { ReactElement } from 'react'
import s from './styles.module.scss'

interface Props {
  id: number
  name?: string
  price?: number
  image?: string
}

function ProductCard(props: Props): ReactElement {
  const { id, name, price, image } = props
  return <div className={s.productCard__container}>{name}</div>
}

export default ProductCard
