console.log('App.js is running!!');

let showDetails;
const toggleDetails = () => {
  showDetails = !showDetails;
  console.log(showDetails);
  render();
};

showDetails = true;

const render = () => {
  const template = (
    <div>
      <h1>Toggle Visibility</h1>
      <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'}</button>
      {showDetails && <p>Show details</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();

