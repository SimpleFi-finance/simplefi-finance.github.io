import * as React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    Spacer,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import { Logo } from '../../Logo';
  
  export const NavBar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '4', md: '6' }} position="relative" width="100%" top={0} left={0}>
        <Box as="nav" bg="transparent" color="on-accent" role="navigation">
          <Container py={{ base: '3', lg: '4' }} maxW="100%">
            <Flex justify="space-between">
                <Logo />
                <Spacer />
                {isDesktop && (
                  <ButtonGroup variant="ghost-on-accent" spacing="1">
                    <Button>Careers</Button>
                    <Button>Subgraphs Documentation</Button>
                    <Button>API Documentation</Button>
                    <Button variant="solid" disabled color="white.500" bg="gray.300">Launch App</Button>
                  </ButtonGroup>
                )}
              {!isDesktop &&
                <IconButton
                  variant="ghost-on-accent"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              }
            </Flex>
          </Container>
        </Box>
      </Box>
    )
  }