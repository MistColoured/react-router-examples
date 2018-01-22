import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    const friend = PlayerAPI.get(parseInt(props.match.params.number, 10));
    if (!friend) {
        <p>No!!!</p>
    }
    return <div>{ friend.job}
        <p><Link to='/contact'>Back</Link></p>
    </div>

};

export default Friend;
