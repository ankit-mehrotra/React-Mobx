import React from "react";
import PropTypes from "prop-types";
export class About extends React.Component {
constructor(props,context){
    super(props);
    console.log("Context:"+context.color);
}

    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}
