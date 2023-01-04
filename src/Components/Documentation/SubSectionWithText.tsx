import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  interface IProps {
    title: string;
    text?: string[];
    children?: any;
  }

  export const SubSectionWithText = (props: IProps) => (
    <Box as="section" bg="inherit" pt={{ base: '4', md: '8' }} pb={{ base: '6', md: '8' }}>
      <Stack spacing="1">
        <Text fontSize={useBreakpointValue({ base: 'md', md: 'md' })} fontWeight="semibold" paddingBottom={2}>
          {props.title}
        </Text>
        <Box py={2} px={8} width="100%">
          {props.text?.map(el => (
            <Box pb={1} key={el.split(' ')[0]}>
              <Text >{el}</Text>
            </Box>))}
          {props.children && props.children}
        </Box>
      </Stack>
    </Box>
  )