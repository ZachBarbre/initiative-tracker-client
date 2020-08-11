import React, { useState } from 'react';
import { List } from 'grommet';
import CreatureDetails from './CreatureDetails'

const Initiative = () => {
    const initInitiativeData = [
        {name: 'Boots', initiative: '', hp: 'PC'},
        {name: 'Gwen', initiative: 18, hp: 'PC'},
        {name: 'Wilson', initiative: 3, hp: 'PC'},
        {name: 'Starna', initiative: 10, hp: 'PC'},
        {name: 'Bandit', initiative: 10, hp: 15},
        {name: 'Bandit', initiative: 17, hp: 15},
        {name: 'Bandit', initiative: 21, hp: 15},
        {name: 'Bandit', initiative: 6, hp: 15},
    ]
    const [initiativeData, setInitiativeData] = useState(initInitiativeData)

    // const handleSetInitiative = (creatureIndex, newInitiative) => {
    //     let updateInitiativeArray = [... initiativeData];
    //     const newCreatureData
    //     updateInitiativeArray.splice(creatureIndex, 1, {... })
    // }

    return (
        <List margin='small' data={initiativeData}>
            {(datum, index) => <CreatureDetails datum={datum} index={index} />}
        </List>
        
    )
}

export default Initiative;