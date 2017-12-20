class RandomButtonCounting extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetZero = this.resetZero.bind(this);
    this.state = {
      count: 0,
    };
  }
  addOne() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  minusOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  resetZero() {
    this.setState(() => ({ count: 0 }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetZero}>Reset</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.render(<RandomButtonCounting />, document.getElementById('app'));
