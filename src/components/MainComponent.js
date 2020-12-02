//import logo from './logo.svg';
import '../App.css';
import { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dishdetail from '../DishdetailComponent/dishdetail';
import About from './AboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS

        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        const DishWithId = ({match}) => {
            return (
                <Dishdetail
                dishdtil = {this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
                
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                />
            );

        }
        return (
            <div >
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                    <Route path='/contactus' component={()=> <Contact/>} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <Dishdetail dishdtil={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        )
    };
}

export default Main;
