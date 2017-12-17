'use strict';

console.log('App.js is running!!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the mistGods',
  options: ['Mike', 'Paul', 'David', 'Gary', 'Test']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onHandleChoice = function onHandleChoice() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var choice = app.options[randomNumber];
  console.log(choice);
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onHandleChoice },
      'What should I do?'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (textValue, i) {
        return React.createElement(
          'li',
          { key: i },
          textValue
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
