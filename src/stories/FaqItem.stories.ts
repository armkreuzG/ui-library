import type { Meta, StoryObj } from '@storybook/react'

import FaqItem from '../components/FaqItem'

const meta = {
  title: 'FaqItem',
  component: FaqItem,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FaqItem>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    question: '質問質問質問質問質問質問',
    answer: 'カムパネルラが手をあげました。それから四五人手をあげました。\nジョバンニも手をあげようとして、急いでそのままやめました。\nたしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。'
  },
}
