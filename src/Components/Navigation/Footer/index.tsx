import * as React from 'react'
import {
  Box,
  BoxProps,
  Divider,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Socials } from '../../Socials'

export const Footer = (props: BoxProps) => {
  return (
    <Box>

      <Divider borderColor="gray.200" py="2px" my={2} />
      <Box
        as="footer"
        role="contentinfo"
        bg="transparent"
        {...props}
        pb={{ base: 4, sm: 2 }}
        display="flex"
        flexDirection={useBreakpointValue({
          base: 'column-reverse',
          md: 'row',
          sm: 'column-reverse',
          xs: 'column-reverse',
        })}
        justifyContent="space-between"
        margin="auto"
        width={{ lg: '80%', sm: '100%' }}
      >
        <Text
          margin={useBreakpointValue({
            base: '2px auto',
            md: '2px 5px',
            sm: '2px',
          })}
          padding={useBreakpointValue({
            base: '0px',
            md: '0px 5px',
            sm: ' 0px auto',
          })}
          fontSize={useBreakpointValue({ base: 'sm', sm: 'sm', md: 'sm' })}
          color="white"
        >
          © {new Date().getFullYear()} Simplefi, all rights reserved.
        </Text>
        <Socials
          size="lg"
          style={{
            margin: useBreakpointValue({
              base: '2px auto',
              md: '2px 5px',
              sm: '2px',
            }),
            padding: useBreakpointValue({
              base: '0px auto',
              md: '0px 5px',
              sm: ' 0px auto',
            }),
          }}
        />
      </Box>
    </Box>
  )
}
