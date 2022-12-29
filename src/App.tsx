import React from 'react';
import './App.css';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Sidebar, NavBar, Main, Footer } from './Components';
import { Router } from './Components/Router';

function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex 
      direction='column'
      flex="1"
    >
        <NavBar
        />
        <Main>
          <Router/>
        </Main>
    </Flex>
  );
}

export default App;
