import React,{Component} from "react";

import {inject,observer} from "mobx-react";

@inject("productState")
@observer
export default class ProductList extends Component{


    render(){
        return(
            <h2>Product List -- {this.props.productState.products.length}</h2>
        )
        
    }
}