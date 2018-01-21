import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    const friend = PlayerAPI.get(parseInt(props.match.params.number));
    console.log(friend);
    if (!friend) {
        return <div>Nope!</div>;
    }
    return <div>{friend.job}</div>;
};

export default Friend;
