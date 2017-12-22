import React from 'react';

import Option from './Option.jsx';

const Options = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />))}
    </div>
  );
};

export default Options;
