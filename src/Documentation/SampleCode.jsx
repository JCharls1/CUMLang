import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const SampleCode = () => {
  const codeString = `
    cope("Hello, World!")
  `;
  return (
    <div className="m-10 border-2 border-gray-500">
      <h5>Sample Code</h5>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SampleCode;
