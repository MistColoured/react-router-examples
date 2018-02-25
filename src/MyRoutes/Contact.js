import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FriendList from './FriendList';
import Friend from './Friend';

const Contact = () => (
    <Switch>
        <Route exact path='/contact' component={ FriendList } />
        <Route path='/contact/:number' component={ Friend } />
    </Switch>
);

export default Contact;
