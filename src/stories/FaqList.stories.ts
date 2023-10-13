import type { Meta, StoryObj } from '@storybook/react'

import FaqList from '../components/FaqList'

const meta = {
  title: 'FaqList',
  component: FaqList,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FaqList>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
