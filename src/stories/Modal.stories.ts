import type { Meta, StoryObj } from '@storybook/react'

import Modal from '../components/Modal'

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isVisible: true,
    children: 'Modal'
  },
}
