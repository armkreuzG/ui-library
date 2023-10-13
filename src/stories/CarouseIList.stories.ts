import type { Meta, StoryObj } from '@storybook/react'

import CarouselList from '../components/CarouselList'

const meta = {
  title: 'CarouselList',
  component: CarouselList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CarouselList>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
