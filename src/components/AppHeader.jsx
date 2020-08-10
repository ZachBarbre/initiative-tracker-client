import React from 'react';
import { Button, Heading, Header } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

const AppHeader = (props) => {
  const { showSidebar, setShowSidebar } = props;
  return(
      <Header 
        background='brand' 
        pad={{ 
          vertical: 'small', 
          left: 'medium', 
          right: 'small'
          }}
        elevation='medium'
      >
        <Heading level='3'>Roll for Initative!</Heading>
        <Button onClick={() => console.log('roll initiative')}>
          <FontAwesomeIcon icon={faDiceD20} size='2x' />
        </Button>
      </Header>
  )
}

export default AppHeader