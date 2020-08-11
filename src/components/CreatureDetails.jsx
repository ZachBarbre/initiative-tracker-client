import React, { useState } from 'react';
import { Box, Text, TextInput, Button } from 'grommet';
import { Checkmark } from 'grommet-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { rollDice } from '../utils/rollDice'

const CreatureDetails = (props) => {
  const { datum, index } = props;
  const [newInitiative, setNewInitiative] = useState('');
  const [initiativeValue, setInitiativeValue] = useState('');

  const handleDiceRoll = () => {
    const result = rollDice(20);
    setInitiativeValue(result)
  }

  return (
    <Box 
      key={index} 
      width='medium' 
      direction='row' 
      justify='between' 
      align='center'
    >
      <Text>
        {datum.name}
      </Text>
      {datum.initiative ? 
        <Text>
          {datum.initiative}
        </Text>
        :
        <Box direction='row'>
          <Button onClick={handleDiceRoll}>
            <FontAwesomeIcon icon={faDiceD20} size='lg' />
          </Button>
          <Box width='xxsmall' margin={{horizontal: 'small'}}>
            <TextInput
              value={initiativeValue}
              onChange={(event) => setInitiativeValue(event.target.value)}
            />
          </Box>
          <Button><Checkmark color='status-ok' /></Button>
        </Box>

      }
    </Box>
  )
}

export default CreatureDetails;