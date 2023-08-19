import React from "react";
import "./Console.css";

import ConsoleButton from "./ConsoleButton";

function Console(props) {
    return <div className="Console">
        <div className="ButtonHolder">
            <h2>Actions</h2>
            <ConsoleButton buttonLabel="Run" clickAction={props.onRun}></ConsoleButton>
        </div>
        <div className="Terminal"><div dangerouslySetInnerHTML={{__html:props.terminalOutput}}></div></div>
    </div>
}

export default Console;