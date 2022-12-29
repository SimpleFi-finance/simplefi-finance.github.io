import { Container, Flex, FlexProps } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from '../Footer'

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="1" {...props}>
      <Container flex="1" overflowY="auto">
        {props.children}
        <Footer />
      </Container>
    </Flex>
  )
}