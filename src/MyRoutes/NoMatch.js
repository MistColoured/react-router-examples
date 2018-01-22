import React from 'react';

import { Link } from 'react-router-dom';

const NoMatch = () => (
    <div>
        <p>NoMatch!</p>
        <Link to='/'>Home</Link>
    </div>
);

export default NoMatch;
