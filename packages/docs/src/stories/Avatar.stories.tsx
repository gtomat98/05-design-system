import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gtomat98-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/gtomat98.png',
    alt: 'Matheus Dafonseca',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
