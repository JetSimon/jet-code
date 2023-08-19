import React, { useCallback, useState } from "react";

import './App.css';

import ProblemInfo from './components/ProblemInfo.js';
import IDE from './components/IDE.js';

function errorString(e) {
  return `<span style="color:red">${e}</span><br>`;
}

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
      "input" : "[1, 2]",
      "expected" : 3,
    },

    {
      "input" : "[2, 2]",
      "expected" : 4,
    },

    {
      "input" : "[1, -1]",
      "expected" : 0,
    }
  ],

  driver : function(a, b) {

  }

}

function App() {

  let [problem] = useState(testProblem);
  let [testcase, setTestCase] = useState(JSON.stringify(problem.tests[0]));

  let [terminalOutput, setTerminalOutput] = useState("Welcome to JetCode\n>");
  let [code, setCode] = useState(() => {
    return problem.driver.toString().replace("function", "driver = function").replace("{", "{\n\n");
  });

  function onRunTestcase() {

    let driver = null;
     // First try and set the driver
     try {
      eval(code);
    } 
    catch(e) {
      setTerminalOutput(errorString(e));
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

      let testCode = "driver(";
      let testcaseObject = JSON.parse(testcase);
      let inputs = eval(testcaseObject.input);
      for(let j = 0; j < inputs.length; j++) {
        testCode += inputs[j];
        if(j < inputs.length - 1) {
          testCode += ", "
        }
      }

      testCode += ");"

      try {
        let res = eval(testCode);

        if(res !== testcaseObject.expected) {
          throw Error(`For input ${testcaseObject.input} got ${res} but expected ${testcaseObject.expected}!`)
        }
        else {
          console.log(`Passed case!`);
        }
      } 
      catch(e) {
        output += errorString(e);
      }

      setTerminalOutput(output.toString());
    console.log = console.oldLog;
  }

  function onRun() {

    let driver = null;

    // First try and set the driver
    try {
      eval(code);
    } 
    catch(e) {
      setTerminalOutput(errorString(e));
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
    let anyFailures = false;
    
    for(let i = 0; i < problem.tests.length; i++) {
      const test = problem.tests[i];
      let testCode = "driver(";
      let inputs = eval(test.input);
      for(let j = 0; j < inputs.length; j++) {
        testCode += inputs[j];
        if(j < inputs.length - 1) {
          testCode += ", "
        }
      }

      testCode += ");"

      try {
        let res = eval(testCode);
        //console.log("input:",test.input,"res:",res,"expected:",test.expected)
        
        if(res !== test.expected) {
          anyFailures = true;
          throw Error(`Case ${i+1}: For input ${test.input} got ${res} but expected ${test.expected}!`)
        }
        else {
          console.log(`Passed case ${i+1}!`);
        }
        
        /*if(res) {
          output += res.toString();
        }*/
      } 
      catch(e) {
        output += errorString(e);
      }

    }

    if(!anyFailures) {
      output += "All test cases passed! Problem solved.<br>";
    }
    else {
      output += errorString("One or more test cases failed. Problem still unsolved.");
    }

    setTerminalOutput(output.toString());
    console.log = console.oldLog;
  }

  return (
    <div className="App">
      <header className="App-header">jetcode</header>
      <div className="App-content">
        <ProblemInfo problem={problem}></ProblemInfo>
        <IDE onRunTestcase={onRunTestcase} testcase={testcase} setTestCase={setTestCase} terminalOutput={terminalOutput} onRun={onRun} code={code} setCode={setCode}></IDE></div>
    </div>
  );
}

export default App;
