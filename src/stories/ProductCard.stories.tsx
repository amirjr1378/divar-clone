import { Meta, Story } from '@storybook/react'
import React from 'react'

import ProductCard from '@/components/product/ProductCard'
import type { IProduct } from '@/types/product'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as Meta

const Template: Story<IProduct> = (args) => <ProductCard {...args} />

export const ProductCardDemo = Template.bind({})
ProductCardDemo.args = {
  id: 0,
  title: 'طوطی برزیلی سبز صورت هلویی',
  description: '40000 تومان',
  image: 'https://s100.divarcdn.com/static/thumbnails/1625842286/AYoPiAln.jpg',
}
