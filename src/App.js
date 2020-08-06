import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './components/AppBar';
import Initiative from './components/Initiative';
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
  // improving the app bar here: https://github.com/grommet/grommet-starter-new-app
  return (
    <Grommet theme={theme}>
      <AppBar>Roll for Initiative!</AppBar> 
      <Initiative />
    </Grommet>
  );
}

export default App;
