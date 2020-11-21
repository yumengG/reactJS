//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Main from './components/MainComponent';


class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log("insdie app");
    return (
      <div className="App">
      <Main />
    </div>
    )
  };
}

export default App;
