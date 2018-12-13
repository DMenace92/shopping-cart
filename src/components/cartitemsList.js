import React from 'react'
import { Table } from 'reactstrap'

class CartItemsList extends React.Component {
    render = () => {
        return (
            <>
                <h1>Cart Items</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartItems.length > 0 && this.props.cartItems.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.priceInCents}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default CartItemsList