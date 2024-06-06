import { CiShoppingCart } from "react-icons/ci";
import React, { Component } from 'react'
import './header.css'
export class AddCart extends Component {  




  render() {
    return (
      <div className="contin-icon">
        <CiShoppingCart className="icon-hrader"  />
       
        <span className="count-cart">
        {this.props.name.length}
        </span>
      
        </div>
    )
  }
}

export default AddCart

