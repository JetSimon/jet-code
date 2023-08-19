import React from "react";
import "./ProblemInfo.css";
import ProblemExample from "./ProblemExample";

function ProblemInfo(props) {

    function getExamples(problem) {
        return problem.examples.map((x) => 
        <ProblemExample key={problem.examples.indexOf(x) + 1} number={problem.examples.indexOf(x) + 1} example={x}></ProblemExample>
        );
    }

    return (
        <div className="ProblemInfo">
            <div className="ProblemContentHolder">
                <h3>{props.problem.problemName}</h3>

                <div>{props.problem.description}</div>

                {getExamples(props.problem)}

            </div>
        </div>
    );
}

export default ProblemInfo;