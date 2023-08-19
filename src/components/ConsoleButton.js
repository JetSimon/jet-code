import React from "react";
import "./Console.css";

function ConsoleButton(props) {
    return (
        <button className="button-4 ConsoleButton" onClick={props.clickAction}>
            {props.buttonLabel}
        </button>
    )
}

export default ConsoleButton;