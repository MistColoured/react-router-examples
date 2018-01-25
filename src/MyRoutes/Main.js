import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';

const Main = () => (
    <main>
        <switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
        </switch>
    </main>
);

export default Main;
