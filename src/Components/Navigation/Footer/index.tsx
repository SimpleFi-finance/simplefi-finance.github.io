import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="transparent" {...props} height="40px">
        Footer
    </Box>
  )
}