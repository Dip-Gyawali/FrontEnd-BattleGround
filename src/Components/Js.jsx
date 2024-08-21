import React, { useContext } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as Code } from 'react-codemirror2';
import { UserContext } from './Content';

export default function Js() {
  const {Javascrpt,setJs}= useContext(UserContext);
  function handleChange(editor, data, value){
    setJs(value);
  }
  return (
    <div className="code-editor">
      <Code
        value={Javascrpt}
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
  );
}

