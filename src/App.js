import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Layout from './components/Layout';
import Navigation from './pages/Navigation/Navigation';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
        <Navigation />
        <ToastContainer />
      {/* </Layout> */}
    </ChakraProvider>
  );
}

export default App;
