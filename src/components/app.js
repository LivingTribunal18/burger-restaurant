import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Order from './order';
import MenuAdmin from './menuAdmin';
import Burger from './burger';
import sampleBurgers from '../sample-burgers';
import base from '../base';
import firebase from 'firebase/app';
import SignIn from './auth/signIn';

class App extends React.Component{
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurantUrl);
    if (localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)})
    }

    this.ref = base.syncState(`${params.restaurantUrl}/burgers`, {
      context: this,
      state: 'burgers'
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantUrl, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    const burgers = {...this.state.burgers};    // create a copy of object 'state'
    burgers[`burger${Date.now()}`] = burger;  // add new burger data in variable object 'burgers'
    this.setState({burgers: burgers});   // set object 'burgers' with new data in object 'state'
  }

  updateBurger = (key, updatedBurger) => {
    const burgers = { ...this.props.burger};
    burgers[key] = updatedBurger;
    this.setState({burgers: burgers});
  }

  deleteBurger = key => {
    const burgers = { ...this.state.burgers};
    burgers[key] = null;
    this.setState({ burgers });
  }

  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers});
  }

  addToOrder = (key) => {
    const order = {...this.state.order}; // cope state order
    order[key] = order[key] + 1 || 1; // amount of identical burgers
    this.setState({order: order});
  }

  deleteFromOrder = key => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  }

  render(){
    return(
      <SignIn>
        <div className="burger-paradise">
          <div className="menu">
            <Header title="Hot Burgers"/>
            <ul className="burgers">
              {Object.keys(this.state.burgers).map(key => {
                return <Burger key={key} index={key} details={this.state.burgers[key]} addToOrder={this.addToOrder} />
              })}
            </ul>
          </div>
          <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.deleteFromOrder} />
          <MenuAdmin 
            addBurger={this.addBurger} 
            loadSampleBurgers={this.loadSampleBurgers} 
            burgers={this.state.burgers} 
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger} 
            handleLogout={this.handleLogout} />
        </div>
      </SignIn>
    );
  }
}

export default App;