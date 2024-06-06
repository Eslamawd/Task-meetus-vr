import React, { Component } from 'react'
import './list-cart.css'

import { IoCloseCircle } from "react-icons/io5";
import Rivews from '../reviows/Rivews';

 class ListCarts extends Component {

  


  render() {
    return (
      <div className='list-cart'>
        <IoCloseCircle onClick={() => this.props.handleViwList()} className='icon-close' />
        <ul className='list'>
          {this.props.listsView.map((item) => (
            <li className='item' key={item._id}>
              <div>
              <h5 className=''>
                {item.title}
               </h5>
               <h6 className=''> {item.description} </h6>
               <h6> {item.price}</h6>
               <Rivews riteng={item.riting} />
              
              </div>
               <div className='image-cover'>
               <img className='image-list' src={item.image} alt={item.title} />
               </div>
             
            </li>
          ))}
         

        </ul>
        <button  > PAY</button> 
        <button> Contenuo </button>
      </div>
    )
  }
}

export default ListCarts;