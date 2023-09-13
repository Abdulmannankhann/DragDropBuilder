import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import "./styles/main.scss";
//import plugin from "grapesjs-preset-webpage";
import plugin from "grapesjs-preset-newsletter";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin],
      pluginsOpts: {
        plugin,
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
