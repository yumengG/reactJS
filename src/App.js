//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Menu from './components/MenuComponent';
import Dishdetail from './DishdetailComponent/dishdetail'
import {Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from './shared/dishes';


class App extends Component{
  constructor(props) {
    super(props);

    this.state= {
      dishes: DISHES,
      dishdetail: Dishdetail
    };
  }
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} Dishdetail={this.state.dishdetail}/>
    </div>
    )
  };
}

export default App;
