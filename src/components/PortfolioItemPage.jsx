import React from 'react';

const PortfolioItem = props => (
  <div>
    <h1>A thing I have done</h1>
    <p>This page is for item id of {props.match.params.id}</p>
  </div>
);

export default PortfolioItem;
