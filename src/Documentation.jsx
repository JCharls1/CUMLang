import React from "react";
import SampleCode from "./Documentation/SampleCode";
import Variables from "./Documentation/Variables";
import IfStatements from "./Documentation/IfStatements";
import ForLoop from "./Documentation/ForLoop";
import Functions from "./Documentation/Functions";

const Documentation = () => {
  return (
    <div>
      <SampleCode></SampleCode>
      <Variables></Variables>
      <IfStatements></IfStatements>
      <ForLoop></ForLoop>
      <Functions></Functions>
    </div>
  );
};

export default Documentation;
