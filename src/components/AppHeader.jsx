import React from 'react';
import { Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
import AppBar from './AppBar';

const AppHeader = (props) => {
  const { showSidebar, setShowSidebar } = props;
  return(
    <header>
      <AppBar>
        <Heading level='3'>Roll for Initative!</Heading>
        <Button icon={<Notification />} onClick={() => {setShowSidebar(!showSidebar)}} />
      </AppBar>
    </header>
  )
}

export default AppHeader