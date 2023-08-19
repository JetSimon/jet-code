import React from "react";
import "./IDE.css";

import Editor from "./Editor.js";
import Console from "./Console.js";

function IDE(props) {
    return (
        <div className="IDE">
            <Editor code={props.code} setCode={props.setCode}></Editor>
            <Console terminalOutput={props.terminalOutput} onRun={props.onRun}></Console>
        </div>
    );
}

export default IDE;