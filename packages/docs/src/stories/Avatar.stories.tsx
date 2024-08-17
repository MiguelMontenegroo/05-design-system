import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/MiguelMontenegroo.png',
    alt: 'Miguel Montenegro',
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined, 
  }
}
