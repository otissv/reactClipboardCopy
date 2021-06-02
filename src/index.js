import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

function App() {
  const [state, setState] = useState();
  function handleCopy(e) {
    e.preventDefault();

    document.execCommand("copy");
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <CopyToClipboard
        text={state}
        onCopy={() => setState("this has been copied")}
      >
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      {state ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
