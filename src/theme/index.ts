// theme/index.js
import { extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme'
// Global style overrides
import {styles} from './styles'
import { colors } from './colors'
// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import {Button} from './components';

const overrides = {
  // Other foundational style overrides go here
  config: {
    cssVarPrefix: 'simp',
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles,
  colors,
  components: {
    Button,
    // Other components go here
  },
}

export default extendTheme(overrides, proTheme)