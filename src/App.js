import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain'
import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppHeader />
        <AppMain  />
      </Box>
    </Grommet>
  );
}

export default App;
