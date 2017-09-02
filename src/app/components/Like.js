import React from "react";
import PropTypes from "prop-types";
export class Like extends React.Component {
constructor(props,context){
    super(props);
    console.log("Context:"+context.color);
}
componentWillReceiveProps(nextProps){
       console.log("Current",this.props);
       console.log("Next",nextProps)
   }
   shouldComponentUpdate(nextProps,nextState){
       console.log("should Update",nextProps);
       return true;
   }
    render() {
        return (
            <div>
                <h1>Like - {this.props.likes}</h1>
                <button onClick={()=>this.props.onIncr()}>+1</button>
            </div>
        )
    }
}
Like.contextTypes ={
    appTitle: PropTypes.string,
    color:PropTypes.string
}