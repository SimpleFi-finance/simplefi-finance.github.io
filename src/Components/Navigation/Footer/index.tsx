import * as React from 'react'
import { Box, BoxProps, HStack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Socials } from '../../Socials';

export const Footer = (props: BoxProps) => {
  
  return (
    <Box as="footer" role="contentinfo" bg="transparent" {...props} height="40px" px={1}>
      <HStack justify="space-between">
        <Text fontSize={useBreakpointValue({base: '10px', sm: '10px', md: 'sm'})}>© {new Date().getFullYear()} Simplefi, all rights reserved.</Text>
        <Socials size="lg"/>
      </HStack>
    </Box>
  )
}