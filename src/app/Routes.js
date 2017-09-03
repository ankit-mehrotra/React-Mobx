import React from "react";
import {BrowserRouter as Router,Route,Switch}
from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {App} from "./App";
import Cart from "./cart/components/cart";
import ProductList from "./product/components/ProductList";
import ProductRoutes from "./product/Routes";
//Route Config

import Login from "./auth/components/Login";

import AuthRoute from "./auth/components/AuthRoute";

export default function Routes(){
    return (
     <Router>
         <App>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/contact" component={Contact} />
                <AuthRoute path="/cart" component={Cart} />
                <Route path="/products" component={ProductRoutes} />
                <Route path="/login" component={Login} />
            </Switch>
        </App>
    </Router>

    )
}