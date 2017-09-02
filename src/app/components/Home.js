import React,{Component} from "react";
import {Like} from "./Like";
export class Home extends Component{

   constructor(props){
       super(props);
       this.state ={
           likes:1000
       }
   }
   increment(){
       console.log("Home Increment");
       this.setState({
           likes:this.state.likes+1
       });
   }
   shouldComponentUpdate(nextProps,nextState){
    if(nextState.likes%5==0){
        return false;
    }
    return true;
}
    render(){ console.log("Inside Render Method");
        return (<div>
            <h1>Home</h1>
            <Like likes={this.state.likes} onIncr={()=>this.increment()} />
            </div>)
    }
}