import * as React from 'react'
import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import { Socials } from '../../Socials';

export const Footer = (props: BoxProps) => {
  
  return (
    <Box as="footer" role="contentinfo" bg="transparent" {...props} height="40px">
      <HStack justify="space-between">
        <Text fontSize="xs">© {new Date().getFullYear()} Simplefi, all rights reserved.</Text>
        <Socials size="lg"/>
      </HStack>
    </Box>
  )
}