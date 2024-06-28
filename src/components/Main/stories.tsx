import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

// type Story = StoryObj<typeof Main> & { title?: string }

export const Default: StoryObj = {
  // args: { title: 'React Avançado' }
}
