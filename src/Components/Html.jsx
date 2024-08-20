import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import { Controlled as Code } from 'react-codemirror2';

export default function Html() {
  const [html, setHtml] = useState('');

  function handleChange(editor, data, value) {
    setHtml(value);
  }

  return (
    <div className="code-editor">
      <Code
        value={html}
        onBeforeChange={handleChange}
        className='editor-box'
        options={{
          theme: 'material',
          lineWrapping: true,
          lint: true,
          mode: "xml",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
