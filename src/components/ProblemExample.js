import React from "react";
import "./ProblemExample.css";

function ProblemExample(props) {
    return (
        <div className="ProblemExample">
        
        <h4>Example {props.number}:</h4>
        <div className="ProblemExampleBody">
            <p><span>Input: </span>{props.example.input}</p>
            <p><span>Output: </span>{props.example.output}</p>
            <p><span>Explanation: <br></br></span>{props.example.explanation}</p>
        </div>

        </div>
    );
}

export default ProblemExample;