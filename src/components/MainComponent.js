//import logo from './logo.svg';
import '../App.css';
import { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from '../DishdetailComponent/dishdetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }
    render() {
        return (
            <div >
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dishdtil={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        )
    };
}

export default Main;
