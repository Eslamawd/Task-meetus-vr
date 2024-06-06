import React, { Component } from 'react'
import './cardlistsvew.css'
import Rivews from '../reviows/Rivews'


export class CardProudact extends Component {
 
    
  render() {
    return (
      <div className='cards-proudact'>
        <ul className='cards'>
  {this.props.posts.map(
    (post) => (
        <li key={post._id} className='card'>

            <img src={post.image} className='image-clas' alt={`${post.title}`}  />
            <h6>{post.title}</h6>
            <h5>L.E {post.price}</h5>
        <Rivews riteng={post.riting} />
            <button
              onClick={ () => this.props.handleAddCart(post._id)}  className='add-cart-btn' > Add To Cart </button>
     </li>
    )
  )}
        </ul>
      </div>
    )
  }
}

export default CardProudact