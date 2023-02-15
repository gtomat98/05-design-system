import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gtomat98-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum ut architecto cumque nam id temporibus distinctio eum animi? Tenetur nihil consequuntur, ullam impedit accusantium recusandae voluptas? Perspiciatis, voluptate aspernatur.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
