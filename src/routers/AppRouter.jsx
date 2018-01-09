import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Header from '../components/Header.jsx';
import HomePage from '../components/HomePage.jsx';
import ContactPage from '../components/ContactPage.jsx';
import PortfolioItemPage from '../components/PortfolioItemPage.jsx';
import PortfolioPage from '../components/PortfolioPage.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/portfolio" component={PortfolioPage} exact />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
