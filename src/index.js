import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Redux/store';
import { theme } from "@chakra-ui/react"
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>


);

