import React from 'react';
import { Box, Collapsible, Layer, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import Initiative from './Initiative';

const AppMain = (props) => {
  const { showSidebar, size, setShowSidebar } = props;
  console.log(size, showSidebar)
  return(
    <Box direction='row' flex overflow={{horizontal: "hidden"}}>
      <Box flex align='center' justify='center'>
        <Initiative />
      </Box>
        {(!showSidebar || size !== 'small') ? 
          (<Collapsible direction="horizontal" open={showSidebar}>
            <Box 
              flex
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Collapsible>)
          : 
          (<Layer>
            <Box 
              background='light-2'
              tag='header'
              justify='end'
              align='center'
              direction='row'
            >
              <Button
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
            </Box>
            <Box 
              fill
              background='light-2'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Layer>)}
    </Box>
  )
};

export default AppMain;