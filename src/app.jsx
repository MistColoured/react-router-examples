console.log('App.js is running!');

var myObb = {
  title: '',
  age: 18,
  subtitle: 'Subtitle',
  location: 'Portsmouth',
  password: 'Password, duh',
  options: [
    'One',
    'Two',
  ]
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var template = (
  <div>
    <h1>{myObb.title ? myObb.title : "None entered" }</h1>
    {myObb.subtitle && <p>{myObb.subtitle}</p>}
    <p>{myObb.options.length >0 ? "Some options" : "No options" }</p>
    {getLocation(myObb.location)}
    {(myObb && myObb.age >= 18) && myObb.age}
    <p>Password: {myObb.password}</p>
  </div>
    );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
