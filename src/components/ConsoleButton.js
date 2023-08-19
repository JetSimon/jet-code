import React from "react";
import "./Console.css";

function ConsoleButton(props) {
    return (
        <button onClick={props.clickAction}>
            {props.buttonLabel}
        </button>
    )
}

export default ConsoleButton;