import * as React from 'react'
import { Flex, FlexProps, StackDivider, VStack } from '@chakra-ui/react'
import { Footer } from '../Footer'

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="1" {...props}>
      <VStack
        divider={<StackDivider borderColor='gray.200' px="5px" />}
        spacing={4}
        align='stretch'
      >
        {props.children}
        <Footer />
      </VStack>
    </Flex>
  )
}