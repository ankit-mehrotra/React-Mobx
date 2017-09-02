import React from "react";
import {HashRouter as Router,Route,Switch}
from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {App} from "./App";
import Cart from "./cart/components/cart";
import ProductList from "./product/components/ProductList";
//Route Config

export default function Routes(){
    return (
     <Router>
         <App>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/cart" component={Cart} />
                <Route path="/products" component={ProductList} />
            </Switch>
        </App>
    </Router>

    )
}