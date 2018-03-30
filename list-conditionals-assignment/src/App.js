import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: '',
    validation: '',
    char: []
  }

  changeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
}

  render() {

    const charList = this.state.userInput.split('').map((c, index) => {
      return <Char
        character={c}
        key={index}
        click={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">

        <p>Type stuff and be amazed!</p>

        <input type='text' value={this.state.userInput} onChange={ this.changeHandler }/>

        <p>{this.state.userInput}</p>

        <Validation
        inputLength={this.state.userInput.length} />

        { charList }

      </div>
    );
  }
}

export default App;
