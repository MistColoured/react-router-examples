import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import PortfolioItemPage from './PortfolioItemPage';
import PortfolioPage from './PortfolioPage';

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ HomePage } exact />
                <Route path='/portfolio' component={ PortfolioPage } exact />
                <Route path='/portfolio/:id' component={ PortfolioItemPage } />
                <Route path='/contact' component={ ContactPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
