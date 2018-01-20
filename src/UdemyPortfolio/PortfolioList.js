import React from 'react';

import { Link } from 'react-router-dom';

import PlayerAPI from './api';

const PortfolioList = () => (
    <div>
        <ul>
            { PlayerAPI.all().map(p => (
                <li key={p.number}>
                    <Link to={ `/portfolio/${p.number}`}>
                        {p.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default PortfolioList;
