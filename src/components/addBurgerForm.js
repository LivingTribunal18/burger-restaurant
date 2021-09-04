import React from 'react';
import PropTypes from 'prop-types';

class AddBurgerForm extends React.Component{

  static propTypes = {
    addBurger: PropTypes.func
  }

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) =>{
    event.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    
    this.props.addBurger(burger);
    event.currentTarget.reset();
  }

  render(){
    return(
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input ref={this.nameRef} type="text" name="name" placeholder="Name" autoComplete="off" />
        <input ref={this.priceRef} type="text" name="price" placeholder="Price" autoComplete="off" />
        <select ref={this.statusRef} name="status" className="status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Description" ></textarea>
        <input ref={this.imageRef} type="file" name="image" placeholder="Image" autoComplete="off" />
        <button type="submit" name="submit">Submit</button>
      </form>      
    );
  }
}

export default AddBurgerForm;