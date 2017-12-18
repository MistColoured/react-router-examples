const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  },
};

const getName = obj.getName;
console.log(getName());

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing One', 'Thing Two', 'Thing Three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll=this.handleRemoveAll(this);
  }
  handleRemoveAll() {
    alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
          {this.props.options.map(zzTop => <Option key={zzTop} optionText={zzTop} />)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const inputText = e.target.option.value.trim();
    if (!!inputText) {
      console.log(inputText);
      e.target.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));