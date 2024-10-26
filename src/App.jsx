import { useState } from "react";
import "./App.css";
import TextEditor from "./TextEditor";
import Documentation from "./Documentation";

function App() {
  return (
    <>
      <div className="overflow-auto h-screen bg-moody-blue">
        <div className="flex justify-center m-10">
          <h1 className="text-silver-shit text-3xl font-Arial">CUM Lang</h1>
        </div>
        <TextEditor></TextEditor>
        <Documentation></Documentation>
      </div>
    </>
  );
}

export default App;
