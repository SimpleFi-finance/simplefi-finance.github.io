import * as React from 'react'
import { Box, BoxProps, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Socials } from '../../Socials';

export const Footer = (props: BoxProps) => {
  
  return (
    <Box as="footer" role="contentinfo" bg="transparent" {...props} p={2}>
      <Stack direction={useBreakpointValue({default: 'row', md: 'row', sm: 'column-reverse'})} justifyContent={useBreakpointValue({
        default: 'space-between', sm: 'space-between', md: 'space-between'})}>
        <Text margin={useBreakpointValue({base: '2px auto', sm: '2px auto', md: '4px', lg: '4px'})} fontSize={useBreakpointValue({base: 'sm', sm: 'sm', md: 'sm'})}>© {new Date().getFullYear()} Simplefi, all rights reserved.</Text>
        <Socials size="lg" style={{margin: useBreakpointValue({base: '4px auto', sm: ' 4px auto', md: '4px', lg: '4px'})}}/>
      </Stack>
    </Box>
  )
}