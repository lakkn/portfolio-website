import React,{useState} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        day: ""
    };
  }


  componentDidMount() {
    fetch('/api/day').then((response) => response.json()).then((response) => this.setState({day: response}))
  }

  render() {
    return (
      <h1>Hey! Its {this.state.day}</h1>
    );
  }

}

export default App;
