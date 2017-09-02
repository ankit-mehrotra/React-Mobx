import {observable, action} from "mobx";

class ProductState {

    @observable products = [];

    @action setProducts(products) {
        this.products = products;
    }

    @action getProducts() {
        fetch("http://localhost:7070/api/products")
        .then ( response => response.json())
        .then (products => {
            this.setProducts(products);
        })
    }

}

export default new ProductState();