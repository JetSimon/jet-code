import React, { useCallback, useState } from "react";

import './App.css';

import ProblemInfo from './components/ProblemInfo.js';
import IDE from './components/IDE.js';

const testProblem = {
  problemName : "Addition",
  description : "This is a very common problem. Where you add two numbers a and b together.",
  examples : [
    {
      input : "a = 1, b = 2",
      output : "3",
      explanation: "1 + 2 = 3"
    }
  ],

  tests : [
    {
      "input" : [1, 2],
      "expected" : 3,
    },

    {
      "input" : [2, 2],
      "expected" : 4,
    },

    {
      "input" : [1, -1],
      "expected" : 0,
    }
  ],

  driver : function(a, b) {

  }

}

function App() {

  let [problem] = useState(testProblem);

  let [terminalOutput, setTerminalOutput] = useState("Welcome to JetCode\n>");
  let [code, setCode] = useState(() => {
    return problem.driver.toString().replace("function", "driver = function").replace("{", "{\n\n");
  });

  function onRun() {

    let driver = problem.driver;

    // First try and set the driver
    try {
      eval(code);
    } 
    catch(e) {
      setTerminalOutput(e.toString());
      return;
    }

    console.oldLog = console.log;
    console.log = function(...args)
    {
        console.oldLog(...args);
        for (let i = 0; i < arguments.length; i++) {
          const arg = arguments[i];
          output += arg.toString() + " ";
        }
        output += "<br>";
    };

    // This is the eval per function
    let output = "";
    
    for(let i = 0; i < problem.tests.length; i++) {
      const test = problem.tests[i];
      let testCode = "driver("
      for(let j = 0; j < test.input.length; j++) {
        testCode += test.input[j];
        if(j < test.input.length - 1) {
          testCode += ", "
        }
      }

      testCode += ");"

      try {
        let res = eval(testCode);
        //console.log("input:",test.input,"res:",res,"expected:",test.expected)
        
        if(res !== test.expected) {
          throw Error(`Case ${i+1}: For input [${test.input}] got ${res} but expected ${test.expected}!`)
        }
        else {
          console.log(`Passed case ${i+1}!`);
        }
        
        /*if(res) {
          output += res.toString();
        }*/
      } 
      catch(e) {
        output += e + "<br>";
      }

    }

    setTerminalOutput(output.toString());
    console.log = console.oldLog;
  }

  return (
    <div className="App">
      <header className="App-header">jetcode</header>
      <div className="App-content">
        <ProblemInfo problem={problem}></ProblemInfo>
        <IDE terminalOutput={terminalOutput} onRun={onRun} code={code} setCode={setCode}></IDE></div>
    </div>
  );
}

export default App;
