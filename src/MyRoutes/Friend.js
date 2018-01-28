import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    console.log('Friend');
    const friend = PlayerAPI.get(parseInt(props.match.params.number));
    if (!friend) {
        return <div>Nope!</div>
    }
    return <div>
        {friend.job}
        <p><Link to='/contact'>Back</Link></p>
    </div>
};

export default Friend;
