import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PortfolioList from './PortfolioList';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => (
    <div>
        <Switch>
            <Route exact path='/portfolio' component={ PortfolioList } />
            <Route path='/portfolio/:id' component={ PortfolioItem } />
        </Switch>
    </div>
);

export default Portfolio;
