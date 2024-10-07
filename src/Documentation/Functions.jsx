import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
const Functions = () => {
  const codeString = `
    finna f(n)
        Highkey n == 0 tho
            yeet 1
        Lowkey
            yeet n * f(n-1)
        rn
    rn

    cope(f(5))

    finna bruh(a)
        cope(a)
    rn
    bruh("This is a function")
  `;
  return (
    <div className="m-10">
      <h5 className="flex justify-center text-silver-shit text-3xl font-Arial">
        Functions
      </h5>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Functions;
