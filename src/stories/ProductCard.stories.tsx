import { Meta, Story } from '@storybook/react'
import React from 'react'

import ProductCard from '@/components/ProductCard'
import { ProductCardProps } from '@/components/ProductCard/types'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as Meta

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />

export const ProductCardDemo = Template.bind({})
ProductCardDemo.args = {
  id: 0,
  name: 'طوطی برزیلی سبز صورت هلویی',
  price: 400000,
  image: 'https://s100.divarcdn.com/static/thumbnails/1625842286/AYoPiAln.jpg',
}
