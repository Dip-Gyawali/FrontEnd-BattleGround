import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/css/css';
import { Controlled as Code } from 'react-codemirror2';

export default function Css() {
  const [css, setCss] = useState('');

  function handleChange(editor, data, value) {
    setCss(value);
  }
  return (
    <div className="code-editor">
    <Code
      value={css}
      onBeforeChange={handleChange}
      className='editor-box'
      options={{
        theme: 'material',
        lineWrapping: true,
        lint: true,
        mode: "css",
        lineNumbers: true,
      }}
    />
  </div>
  )
}
