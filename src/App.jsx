import React, { Component } from "react";
import { Navbar } from "./NavBar";
import ShoppingCart from './ShoppingCart';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ShoppingCart />
            </React.Fragment>
        );
    }
}