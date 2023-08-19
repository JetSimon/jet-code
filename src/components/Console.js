import React from "react";
import "./Console.css";

import ConsoleButton from "./ConsoleButton";

function Console(props) {

    function onChange(e) {
        props.setTestCase(e.target.value);
    }

    return <div className="Console">
        <div className="ButtonHolder">
        <input onChange={onChange} value={props.testcase} type="text"></input>
        <ConsoleButton buttonLabel="Run Testcase" clickAction={props.onRunTestcase}></ConsoleButton>
        <ConsoleButton buttonLabel="Run Tests" clickAction={props.onRun}></ConsoleButton>
        </div>
        <div className="Terminal"><div dangerouslySetInnerHTML={{__html:props.terminalOutput}}></div></div>
    </div>
}

export default Console;