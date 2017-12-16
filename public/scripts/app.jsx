'use strict';

console.log('App.js is running!');

var myObb = {
  title: '',
  age: 18,
  subtitle: 'Subtitle',
  location: 'Portsmouth',
  password: 'Password, duh',
  options: ['One', 'Two']
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    myObb.title ? myObb.title : "None entered"
  ),
  myObb.subtitle && React.createElement(
    'p',
    null,
    myObb.subtitle
  ),
  React.createElement(
    'p',
    null,
    myObb.options.length > 0 ? "Some options" : "No options"
  ),
  getLocation(myObb.location),
  myObb && myObb.age >= 18 && myObb.age,
  React.createElement(
    'p',
    null,
    'Password: ',
    myObb.password
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
