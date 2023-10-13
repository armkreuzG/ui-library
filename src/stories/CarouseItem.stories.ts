import type { Meta, StoryObj } from '@storybook/react'

import CarouselItem from '../components/CarouselItem'

const meta = {
  title: 'CarouselItem',
  component: CarouselItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CarouselItem>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: 'http://placekitten.com/150/200',
    title: 'Milo',
    text: 'Risk-taking traveler with love for tree-scaling and butterfly-hunting.'
},
}
