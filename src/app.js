import React, { Component } from 'react';
import productList from "./components/ProductList";
import shoppingCart from "./components/shoppingCart";



class App extends Component {

    render() {
        return (
            <div className="App">
                <productList/>
            </div>

        );
    }
}

export default App;

