import React, { Component } from 'react';

export default class CustomersList extends Component {
    state = { 
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            {id: 1, name:"Scott", phone: null, address: {city: "New Delhi"}, photo: "https://picsum.photos/id/1010/60"},
            {id: 2, name:"Jill", phone: "555-555-5555", address: {city: "New Delhi"}, photo: "https://picsum.photos/id/1011/60"},
            {id: 3, name:"Chris", phone: "555-555-5555", address: {city: "New Delhi"}, photo: "https://picsum.photos/id/1012/60"},
            {id: 4, name:"Joey", phone: "555-555-5555", address: {city: "New Delhi"}, photo: "https://picsum.photos/id/1013/60"},
            {id: 5, name:"Matt", phone: "555-555-5555", address: {city: "New Delhi"}, photo: "https://picsum.photos/id/1014/60"}
        ]
    };

    // customerNameStyle = (custName) => {
    //     if(custName.startsWith("S")) return "green-highlight";
    //     else if(custName.startsWith("J")) return "red-highlight";
    //     else return {};
    // }

    render(){
        return (
            <div>
                <h4 className="m-1 p-1">
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
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
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

    getPhoneToRender(phone) {
        return phone ? phone : <div className="bg-warning p-2 text-center">No Phone</div>
    }

    getCustomerRow = () => {
        return (
            this.state.customers.map((customer,idx) => {
                return (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>
                            <img src={customer.photo} alt={customer.name}/>
                            <div>
                                <button className="btn btn-sm btn-secondary" onClick={() => { this.onChangePictureClick(customer, idx); }}>Change Picture</button>
                            </div>
                        </td>
                        <td /*className={this.customerNameStyle(customer.name)}*/>{customer.name}</td>
                        <td>{this.getPhoneToRender(customer.phone)}</td>
                        <td>{customer.address.city}</td>
                    </tr>
                );
            })
        );
    }

    //Executes when the user clicks on "Change Picture" button in the grid
    //Receives the "customer" object and index of the currently clicked customer
    onChangePictureClick = (customer, idx) => {
        //Get existing customers
        var custArr = this.state.customers;
        custArr[idx].photo="https://www.picsum.photos/id/104/60";
        this.setState({ customers: custArr})
    }
}