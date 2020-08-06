import React, { useState } from 'react';
import { Grommet } from 'grommet';
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
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <Grommet theme={theme} full>
      <AppHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <AppMain showSidebar={showSidebar} />
    </Grommet>
  );
}

export default App;
