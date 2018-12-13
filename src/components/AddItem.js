import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class AddItem extends React.Component {
    items = [
        { id: "40", name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: "41", name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: "42", name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: "43", name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: "44", name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: "45", name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: "46", name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: "47", name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: "48", name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
    _onSelectChange = e => {
        this.props.updateSelectedProductId(e.target.value)
    }
    _onQuantityChange = e => {
        this.props.updateQuantity(e.target.value)
    }
    _onFormSubmit = e => {
        e.preventDefault();
        const fullItem = this.items.find(item => this.props.form.selectedProductId === item.id)
        const {name, priceInCents} = fullItem
        this.props.addItemToCart(name, priceInCents)
    }
    render = () => {
        return (
            <>
                <Form onSubmit={this._onFormSubmit}>
                    <FormGroup>
                        <Label for="selectItem">Select Item</Label>
                        <Input
                            type="select"
                            name="selectItem"
                            id="selectItem"
                            value={this.props.form.selectedProductId}
                            onChange={this._onSelectChange}
                        >
                            {this.items.map(item => <option key={item.id} value={item.id}>{item.name} - {item.priceInCents} cents</option>)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Quantity</Label>
                        <Input type="number" name="quantity" id="quantity" value={this.props.form.quantity} onChange={this._onQuantityChange} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </>
        )
    }
}

export default AddItem