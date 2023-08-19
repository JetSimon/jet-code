import React, {useState, useEffect} from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import "./Editor.css";

function Editor(props) {
    
    let [ callback, setCallback ] = useState(null);
    const setCode = props.setCode;
    const code = props.code;

    function onKeyDown(e) {
        if(e.key === "Tab") {
            e.preventDefault();
            let val = e.target.value;
            let oldStart = e.target.selectionStart;
            e.target.value = val.slice(0, e.target.selectionStart) + "     " + val.slice(e.target.selectionStart);

            onChange(e, () => {
                let editingArea = document.getElementById("editing");
                editingArea.focus();
                editingArea.selectionEnd = oldStart + 5;
            });
        }
    }

    function onChange(e, callback) {
        if(callback) {
            setCallback(callback);
        }
        setCode(e.target.value);

        const codeBox = document.getElementById("highlighting-content");
        codeBox.innerHTML = e.target.value.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"); /* Global RegExp */
    }

    useEffect(() => {
        if(callback) {
            callback();
            setCallback(null);
        }

        const codeBox = document.getElementById("highlighting-content");
        Prism.highlightElement(codeBox);
    });


    return (
        <div className="Editor">
            <textarea onKeyDown={onKeyDown} onChange={onChange} id="editing" value={code}>
            </textarea>
            <pre className="language-js" id="highlighting">
                <code className="language-js" id="highlighting-content">{code}</code>
            </pre>
        </div>
    );
}

export default Editor;