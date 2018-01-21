import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const FriendList = () => (
    <div>
        <ul>
            { PlayerAPI.all().map(p => (
                <li key={ p.number }>
                    <Link to={ `/contact/${p.number}`}>
                        {p.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FriendList;
