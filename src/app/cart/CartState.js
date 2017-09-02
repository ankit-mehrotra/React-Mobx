import {observable,action} from "mobx";

import generate from "./mock-data";

class CartState {
    @observable items = [];

    loadItems() {
        this.items = generate();
        console.log(this.items);
    }

//derived data
    get cartSize(){
        console.log("cart size called");
        return this.items.length;
    }


    get amount () {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].price;
        }

        return sum;
    }
    
   @action removeItem(id) {
        this.items = this.items.filter ( item => item.id != id);
    }
    @action updateItem(id, qty) {
        for (let item of this.items) {
            if (item.id == id) {
                item.quantity = parseInt(qty);
                break;
            }
        }
   }
}



export default new CartState();