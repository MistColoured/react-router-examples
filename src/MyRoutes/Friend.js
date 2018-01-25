import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    console.log('Here');
    const friend = PlayerAPI.get(parseInt(props.match.params.number));
    if (!friend) {
        return <div>Nope!</div>;
    }
    return <div>
        { friend.job }
        <Link to='/contact'>
            <p>Back</p>
        </Link>
    </div>;
};

export default Friend;
