import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as Code } from 'react-codemirror2';

export default function Js() {
  const [js, setJs] = useState('');

  function handleChange(editor, data, value) {
    setJs(value);
  }
  return (
    <div className="code-editor">
    <Code
      value={js}
      onBeforeChange={handleChange}
      className='editor-box'
      options={{
        theme: 'material',
        lineWrapping: true,
        lint: true,
        mode: "javascript",
        lineNumbers: true,
      }}
    />
  </div>
  )
}
