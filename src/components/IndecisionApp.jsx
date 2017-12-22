import React from 'react';

import AddOption from './AddOption.jsx';
import Action from './Action.jsx';
import Header from './Header.jsx';
import Options from './Options.jsx';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Value already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };
  componentDidMount() {
    console.log('Fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Saving data');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          hasOptions={this.state.options.length > 0}
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
