import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const Variables = () => {
  const codeString = `
    Lit string = "This is a string of characters"
    Lit number = 123
    Lit list = [1, 2, 3, 4, 5]

    cope(number)
  `;
  return (
    <div className="m-10">
      <h5 className="flex justify-center text-silver-shit text-3xl font-Arial">
        Variables
      </h5>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Variables;
