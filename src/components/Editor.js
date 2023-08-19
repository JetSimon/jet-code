import React, {useState} from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import "./Editor.css";

function Editor() {
    
    let [code, setCode] = useState("");

    function onKeyDown(e) {
        if(e.key == "Tab") {
            e.preventDefault();
            e.target.value += "     ";
        }
    }

    function onChange(e) {
        const codeBox = document.getElementById("highlighting-content");
        setCode(e.target.value);
        codeBox.innerHTML = e.target.value.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"); /* Global RegExp */
        Prism.highlightElement(codeBox);
    }

    return (
        <div className="Editor">
            <textarea onKeyDown={onKeyDown} onChange={onChange} id="editing" value={code}>
            </textarea>
            <pre className="language-js" id="highlighting">
                <code className="language-js" id="highlighting-content"></code>
            </pre>
        </div>
    );
}

export default Editor;