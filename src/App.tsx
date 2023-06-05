import React from 'react';
import './App.css';
import { Cart } from './ccart/Cart';
import { ShopMain } from './shopMain/ShopMain'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import green from '@mui/material/colors/lightGreen';
import {BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import SearchAppBar from './searchAppBar/SearchAppBar';
import { SignIn } from './signin/SignIn';

const theme = createTheme({
  palette: {
    primary: green,
    
  },
});


function App(){
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ShopMain></ShopMain>
      </ThemeProvider>
  
    </div>
  );
}

export default App;
