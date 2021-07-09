import React from 'react'
import ProductCard from '@/components/ProductCard'
import { Story, Meta } from '@storybook/react'
import { ProductCardProps } from '@/components/ProductCard/types'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as Meta

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />

export const ProductCardDemo = Template.bind({})
ProductCardDemo.args = {
  id: 0,
  name: 'نام',
  price: 1000,
  image: '/',
}
