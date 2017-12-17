console.log('App.js is running!');

let count = 0;

const addOne = () => {
  count++;
  console.log('addOne', count)
}
const minusOne = () => {
  console.log('minusOne')
}
const resetCount = () => {
  console.log('resetCount')
}

const templatetwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetCount}>Reset</button>
  </div>
)


var appRoot = document.getElementById('app');

ReactDOM.render(templatetwo, appRoot);
