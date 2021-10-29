import React, { Component } from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {
    
    state = {
        products: [
            {id: 1, productName: "iPhone", price: 800, quantity: 0},
            {id: 2, productName: "Samsung TV", price: 1000, quantity: 0},
            {id: 3, productName: "LG TV", price: 1200, quantity: 0},
            {id: 4, productName: "iPad Pro", price: 350, quantity: 0},
            {id: 5, productName: "Xbox", price: 400, quantity: 0},
            {id: 6, productName: "Dell Monitor", price: 200, quantity: 0}
        ]
    }
    
    render() {
        return(
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <Product 
                                key={prod.id} 
                                id={prod.id}
                                productName={prod.productName}
                                price={prod.price}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}