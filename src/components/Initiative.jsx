import React from 'react';
import { List } from 'grommet';

const Initiative = () => {
    const initiativeData = [
        {name: 'Boots', initiative: 24, hp: 'PC'},
        {name: 'Gwen', initiative: 18, hp: 'PC'},
        {name: 'Wilson', initiative: 3, hp: 'PC'},
        {name: 'Starna', initiative: 10, hp: 'PC'},
        {name: 'Bandit', initiative: 10, hp: 15},
        {name: 'Bandit', initiative: 17, hp: 15},
        {name: 'Bandit', initiative: 21, hp: 15},
        {name: 'Bandit', initiative: 6, hp: 15},

    ]
    return (
        <List 
            margin='small'
            primaryKey='name'
            secondaryKey='initiative'
            data={initiativeData}
        />
        
    )
}

export default Initiative;