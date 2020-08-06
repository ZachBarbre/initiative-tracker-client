import React from 'react';
import { Box } from 'grommet';
import Initiative from './Initiative';

const AppMain = (props) => {
  const { showSidebar } = props;
  return(
    <Box direction='row' flex overflow={{horizontal: "hidden"}}>
      <Box flex align='center' justify='center'>
        <Initiative />
      </Box>
      {showSidebar && (
      <Box 
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
      )}
    </Box>
  )
};

export default AppMain;