import * as React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Spacer,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { Logo } from '../../Logo';
  import {useNavigate, useLocation} from "react-router-dom";
import { ToggleButton } from '../ToggleButton';

export interface INavBarProps {
    onToggle: () => void;
    onClose: () => void;
    isOpen: boolean;

}
  
  export const NavBar = (props: INavBarProps) => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const navigate = useNavigate();
    const location = useLocation();

    const {
      isOpen,
      onToggle,
    } = props;

    return (
      <Box as="section" pb={{ base: '1', md: '2' }} position="relative" width="100%" top={0} left={0}>
        <Box as="nav" bg="transparent" color="on-accent" role="navigation">
          <Container py={{ base: '3', lg: '4' }} maxW="100%">
            <Flex justify="space-between">
                <Logo />
                <Spacer />
                {isDesktop && (
                  <ButtonGroup variant="ghost-on-accent" spacing="1">
                    <Button onClick={() => navigate('/')} isActive={location.pathname === '/'} _active={{
                      bg: 'transparent',
                      borderBottom: '2px solid',
                      borderRadius: '0px',
                      transition: 'all 0.2s ease-in-out',
                    }}>Home</Button>
                    <Button onClick={() => navigate('/careers')} isActive={location.pathname === '/careers'} _active={{
                      bg: 'transparent',
                      borderBottom: '2px solid',
                      borderRadius: '0px',
                      transition: 'all 0.2s ease-in-out',
                    }}>Careers</Button>
                    <Button 
                      onClick={() => navigate('/api/documentation')}
                      isActive={location.pathname === '/api/documentation'} 
                      _active={{
                        bg: 'transparent',
                        borderBottom: '2px solid',
                        borderRadius: '0px',
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >API Documentation</Button>
                   { /*
                    <Button 
                      onClick={() => window.open("https://subgraphs.docs.simplefi.finance/subgraph-development-documentation/dashboard-integration", "_blank")}
                      isActive={location.pathname === '/subgraphs/documentation'} 
                      _active={{
                        bg: 'transparent',
                        borderBottom: '2px solid',
                        borderRadius: '0px',
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >Subgraphs Documentation</Button>
                    */}
                    <Button 
                      onClick={() => navigate('/#subscribe')} 
                      _active={{
                        bg: 'transparent',
                        borderBottom: '2px solid',
                        borderRadius: '0px',
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >Newsletter</Button>
                  </ButtonGroup>
                )}
              {!isDesktop &&
                <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
              }
            </Flex>
          </Container>
        </Box>
      </Box>
    )
  }