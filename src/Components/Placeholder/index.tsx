import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export const Placeholder = (props: BoxProps) => {
  return <Box role="presentation" py="3" px="4" color="on-accent" {...props} />
}