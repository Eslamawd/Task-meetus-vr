import React, { Component } from 'react'
import Header from '../components/header/Header';
import CardProudact from '../components/card-proudact/CardProudact';
import { posts } from '../services/doummyData';
import ListCarts from '../components/lists-cart/ListCarts';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
                      name: [],
                      listCart: false,
                      listsView: []
                    }

        this.handleAddCart = this.handleAddCart.bind(this)
        this.handleViwList = this.handleViwList.bind(this)
        this.handleProudactView = this.handleProudactView.bind(this)
        console.log(this.state.listCart)
      }

      handleProudactView() {
        let arr = this.state.name.map((n) => posts.find(b => b._id === n))
        return (this.setState({
          listsView: arr
        }))
      }


    handleAddCart(id) {
      //get state cart
    let arr = this.state.name
     //update add new array a new id proudact _id
    arr.push(id)
    return (this.setState({name: arr}))
    }

    //this is a see new list in proudacts
    handleViwList() {
      //get state
      let togle = this.state.listCart
      this.handleProudactView()
      //update state view 
      return (this.setState({listCart: !togle }))
    
    }

    
    

  
  render() {
    return (
      <div>
        <Header handleViwList={this.handleViwList} name={this.state.name} />
        <CardProudact  handleAddCart={this.handleAddCart} posts={posts} />
        {this.state.listCart ? (
        <ListCarts handleViwList={this.handleViwList}  listsView={this.state.listsView} /> 
        ): null}

      </div>
    )
  }
}

export default Home