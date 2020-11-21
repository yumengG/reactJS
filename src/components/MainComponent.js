//import logo from './logo.svg';
import '../App.css';
import {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from '../DishdetailComponent/dishdetail'
import {Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from '../shared/dishes';


class Main extends Component{
  constructor(props) {
    super(props);
    this.state= {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishID) {
    this.setState({selectedDish: dishID});
  }
  render() {
    return (        
      <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <Dishdetail dishdtil={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
    )
  };
}

export default Main;
