import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const PortfolioItem = (props) => {
    const player = PlayerAPI.get(parseInt(props.match.params.id));
    if (!player) {
        return <div>No!</div>
    }
    return <div>{player.name} {player.job}</div>
};

export default PortfolioItem;
