import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const IfStatements = () => {
  const codeString = `
    Lit  number = 17
    
    Highkey number > 18 tho
        cope("Legal age")
    Lowkey
        cope("Illegal age")
    rn
  `;
  return (
    <div className="m-10">
      <h5 className="flex justify-center text-silver-shit text-3xl font-Arial">
        Statements
      </h5>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default IfStatements;
