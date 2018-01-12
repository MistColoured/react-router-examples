import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    const friend = PlayerAPI.get(parseInt(props.match.params.number, 10));
    if (!friend) {
        return <div>Not found!</div>;
    }
    return <div>{friend.number} {friend.name}
        <Link to='/contact'>Back</Link>
    </div>;
};

export default Friend;
