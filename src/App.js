import React, { Component } from 'react';
import {Container} from 'reactstrap'
import Header from './components/Header'
import CartItemsList from './components/cartitemsList'
import AddItem from './components/AddItem'
import Footer from './components/Footer'

class App extends Component {
  state = {
    cartItems: [],
    total: 0,
    form: {
      quantity: "1",
      selectedProductId: "40"
    }
  }
  updateQuantity = newQuantity => {
    this.setState(prevState => {
      return {
        form: {
          ...prevState.form,
          quantity: newQuantity,
        }
      }
    })
  }
  updateSelectedProductId = newId => {
    this.setState(prevState => {
      return {
        form: {
          ...prevState.form,
          selectedProductId: newId
        }
      }
    })
  }
  addItemToCart = (name, priceInCents) => {
    this.setState(prevState => {
      return {
        cartItems: [...prevState.cartItems, {
          id: this.state.form.selectedProductId,
          name,
          priceInCents,
          quantity: this.state.form.quantity
        }]
      }
    })
  }
  render = () => {
    return (
      <Container>
        <Header />
        <CartItemsList 
          cartItems={this.state.cartItems}
          quantity={this.state.form.quantity}
        />
        <p>Total Price In Cents: {this.state.cartItems.reduce((accumulator, item) => {
          return accumulator + item.priceInCents 
        }, 0)}</p>
        <AddItem 
          form={this.state.form}
          updateQuantity={this.updateQuantity}
          updateSelectedProductId={this.updateSelectedProductId}
          addItemToCart={this.addItemToCart}
        />
        <Footer year="2018" />
      </Container>
    );
  }
}

export default App;




// class App extends Component {
//   state = {
//    cartItems:[],
//    total: 0,
//    form: {
//      quantity:'1',
//      selectedProductId:"40"
//    }
//   }

// }

// export default App;
