import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@gtomat98-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text as={'strong'}>testando o componente box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
