import React from "react";
import PropTypes from "prop-types";
export class Contact extends React.Component {
constructor(props,context){
    super(props);
    console.log("Context:"+context.color);
}

    render() {
        return (
            <div>
                <h1>Contact</h1>
            </div>
        )
    }
}
