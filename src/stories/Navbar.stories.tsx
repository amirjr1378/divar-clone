import NavbarComponent from '../components/layout/navbar'
import { ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/Navbar',
  component: NavbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

export const Navbar = () => <NavbarComponent />
