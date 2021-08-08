// TODO: complete this component
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'

import { IProduct } from '@/types/product'

import s from './styles.module.scss'

function ProductCard(props: IProduct): ReactElement {
  const { id, title, description, image } = props
  return (
    <Link href={`/product/${id}`}>
      <a className={s.productCard__container}>
        <div className={s.productCard__description}>
          <h5>{title}</h5>
          <div className="text-muted">{description}</div>
        </div>
        <Image
          src={image || '/img/default-image.jpg'}
          width={135}
          height={135}
          alt="product"
          className={s.productCard__image}
        />
      </a>
    </Link>
  )
}

export default ProductCard
