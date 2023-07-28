import * as React from 'react'
import { Flex, FlexProps, StackDivider, VStack } from '@chakra-ui/react'

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="1" {...props}>
      <VStack
        // divider={<StackDivider borderColor="gray.200" px="2px" m={0}/>}
        spacing={2}
        align="stretch"
        display={{ base: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }}
        justifyContent="center"
        alignContent="center"
      >
        {props.children}
      </VStack>
    </Flex>
  )
}
