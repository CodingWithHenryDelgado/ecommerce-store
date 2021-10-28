import React, { Component } from 'react';

export default class MainContent extends Component {
    state = { 
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            {id: 1, name:"Scott", phone: null, address: {city: "New Delhi"}},
            {id: 2, name:"Jill", phone: "555-555-5555", address: {city: "New Delhi"}},
            {id: 3, name:"Chris", phone: "555-555-5555", address: {city: "New Delhi"}},
            {id: 4, name:"Joey", phone: "555-555-5555", address: {city: "New Delhi"}},
            {id: 5, name:"Matt", phone: "555-555-5555", address: {city: "New Delhi"}}
        ]
    };

    render(){
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge badge-secondary m-2">
                        {this.state.customersCount}
                    </span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((customer) => {
                                return (
                                    <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.phone ?  customer.phone : <div className="bg-warning p-2 text-center">No Phone</div>}</td>
                                        <td>{customer.address.city}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    //Executes when the user clicks on the Refresh button
    onRefreshClick = () => {
        this.setState({
            customersCount: 7
        });
    }
}