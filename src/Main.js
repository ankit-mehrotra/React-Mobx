import React from "react";
import {render} from "react-dom";
import Routes from "./app/Routes";
import cartState from "./app/cart/CartState";
import productState from "./app/product/ProductState"
cartState.loadItems();

let store = {
    cart: cartState,
    productState: productState
}
import {Provider} from "mobx-react";
render(<Provider {...store}>
         <Routes/>
       </Provider>,document.getElementById("root"));