import React,{Component} from "react";
import {inject,observer} from "mobx-react";
import CartList from "./cartList";

@inject("cart")
@observer
export default class Cart extends Component{

    componentDidMount(){
        //this.props.cart.loadItems();
    }
    render(){
        return (
            <div>
                <h2> Cart -{this.props.cart.cartSize}-{this.props.cart.amount}</h2>
                <CartList/>
            </div>
        )
    }
}