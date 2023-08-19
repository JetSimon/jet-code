import React from "react";
import "./ProblemInfo.css";
import ProblemExample from "./ProblemExample";

function ProblemInfo() {
    return (
        <div className="ProblemInfo">
            <div class="ProblemContentHolder">
                <h3>Problem Name</h3>

                <div>This is a very common problem. Where you add two numbers a and b together.</div>

                <ProblemExample>
                </ProblemExample>

                <ProblemExample>
                </ProblemExample>

            </div>
        </div>
    );
}

export default ProblemInfo;