import * as React from 'react'
import { Box, Container, Divider, Spacer, Text } from '@chakra-ui/react'

interface IProps {
    title: string;
    description?: string;
    children?: any;
}

export const SectionHeaderWithDescription = (props: IProps) => (
  <Box as="section" bg="inherit" pt={{ base: '4', md: '8' }} pb={{ base: '6', md: '10' }}>
    <Container>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {props.title}
            </Text>
            <Divider/>
            <Spacer paddingBottom={4}/>
            <Box py={2} px={8}>
                {props.description && 
                    <Text fontSize="sm">
                        {props.description}
                    </Text>
                }
                {
                    props.children && props.children
                }
            </Box>
          </Box>
    </Container>
  </Box>
)