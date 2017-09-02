import React,{Component} from "react";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import PropTypes from "prop-types";
export class App extends Component{
    constructor(){
        super();
        this.show = true;
    }
    getChildContext(){
        return {
            appTitle:"React App",
            color:"Pink"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log("app comp mounted");
            this.show = !this.show;
            this.forceUpdate();
        },3000);
    }
    //return your view
    render(){
    //   return React.createElement("h1",{id:"header"},'React App');
    return(<div>
        
        <Header title="React App" />
        {/* view container child passed from route */}
        <div>
            {this.props.children}
        </div>
        <Footer year={2017} company="Sapient"/>
        </div>
    )
    }
}
App.childContextTypes={
    appTitle: PropTypes.string,
    color:PropTypes.string
}