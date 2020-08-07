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
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <AppMain showSidebar={showSidebar} size={size} setShowSidebar={setShowSidebar} />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
