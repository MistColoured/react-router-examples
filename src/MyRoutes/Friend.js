import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const Friend = (props) => {
    const friend = PlayerAPI.get(parseInt(props.match.params.number, 10));
    if (!friend) {
        return <div>Nope!</div>;
    }
    return <div>Yes!</div>;
};

export default Friend;
