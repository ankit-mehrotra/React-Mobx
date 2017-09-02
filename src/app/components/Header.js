import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import { inject,observer} from "mobx-react";
@inject("cart")
export class Header extends Component{

    constructor(props){
        super(props);
        console.log(props.title);
    }
    render(){
        return (<div>
            <h1>{this.props.title}</h1>
            <NavLink to="/" exact className="button" activeClassName="success">Home</NavLink>
            <NavLink to="/contact" className="button" activeClassName="success">Contact</NavLink>
            <NavLink to="/about"  className="button" activeClassName="success">About</NavLink>
            <NavLink to="/cart"  className="button" activeClassName="success">Cart[{this.props.cart.cartSize}]
            RS-{this.props.cart.amount}</NavLink>
            <NavLink to="/products"  className="button" activeClassName="success">Products</NavLink>
            </div>)
    }
    componentWillMount(){
        console.log("Component Will Mount");
    }
    componentDidMount(){
        console.log("Component did Mount");
    }
    componentWillUnmount(){
        console.log("Component Will UnMount");
    }
}