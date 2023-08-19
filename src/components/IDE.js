import React from "react";
import "./IDE.css";

import Editor from "./Editor.js";
import Console from "./Console.js";

function IDE() {
    return (
        <div className="IDE">
            <Editor></Editor>
            <Console></Console>
        </div>
    );
}

export default IDE;