import React from 'react';
import './App.css';
import { Flex, Slide, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Sidebar, NavBar, Main } from './Components';
import { Router } from './Components/Router';

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Flex 
      direction='column'
      flex="1"
    >
        <NavBar
          isOpen={isOpen}
          onToggle={onToggle}
          onClose={onClose}
        />
        <Main>
          <Router/>
          {!isDesktop && 
            <Slide direction='right' in={isOpen} style={{ zIndex: 10, top: '60px', left: isOpen ? '0px' : '20px', background: '#000c2d'}} >
              <Sidebar/>
            </Slide>
          }
        </Main>
    </Flex>
  );
}

export default App;
