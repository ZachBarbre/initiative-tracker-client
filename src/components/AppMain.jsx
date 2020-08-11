import React from 'react';
import { Box } from 'grommet';
import Initiative from './Initiative';

const AppMain = () => {
  return(
    <Box direction='row' flex>
      <Box flex align='center' justify='start' width='large'>
        <Initiative />
      </Box>
    </Box>
  )
};

export default AppMain;